import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { CourseT1 } from './model/courseT1';
import { CourseT2 } from './model/courseT2';
import { CourseT3 } from './model/courseT3';
import { CourseT4 } from './model/courseT4';
import { Response } from './model/response';
//import { YandexCheckout } from 'yandex-checkout';
import uuid from 'uuid';

import { YKPService } from './ykpay.service'


import { DOCUMENT } from '@angular/common';
import { Cource } from './model/cource';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-ykpay',
    templateUrl: './ykpay.component.html',
    styleUrls: ['./ykpay.component.scss']
})

export class YkpayComponent implements OnInit {

    selectPart: boolean = true;
    fillForm: boolean = false;
    selectedCourse = 0;

    //check = new YandexCheckout('548831', 'test_BXC19NGsNOMn38f1e1t1JBFH4yuieszpj-P0UAb9BLQ');

    currentUser: Cource;

    sumTotal: number = 0;

    myString: string;

    IsWait: boolean = false;

    complexForm: FormGroup;

    ngOnInit(): void {

    }

    constructor(@Inject(DOCUMENT) private document: any, private _ykpService: YKPService, fb: FormBuilder) {
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            //'firstName' : [null, Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            //'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            //'gender' : [null, Validators.required],
            'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'surname': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'mName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'bDay': [null, Validators.required],
            'salon': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'mannequin': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'phone': [null, Validators.required],
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'nominations': [null, Validators.required],
            'confirmPersonal': [null, Validators.required]
        })
    }

    selectCourse(courseNumber: number, part: boolean): void {
        if (part) {
            this.selectPart = false;
            this.fillForm = true;
            //this.selectedCourse = courseNumber;
            switch (courseNumber) {
                case 1: {
                    this.currentUser = new CourseT1();
                    break;
                }
                case 2: {
                    this.currentUser = new CourseT2();
                    break;
                }
                case 3: {
                    this.currentUser = new CourseT3();
                    break;
                }
                case 4: {
                    this.currentUser = new CourseT4();
                    break;
                }
            }

        } else {
            this.selectPart = true;
            this.fillForm = false;
            this.selectedCourse = 0;
            this.sumTotal = 0;
        }

    }

    testClick(): void {
        //const result: Cource = Object.assign({}, this.complexForm.value);
        //result.personalData = Object.assign({}, result.personalData);

        //console.log(result);

        this.sendUserInfo('Test payment ID');
    }


    sendUserInfo(paymentId: string): void {

        this.IsWait = true;

        // Copy Data from Form to Model
        const result: Cource = Object.assign({}, this.complexForm.value);

        // May be delete this?
        result.paymentID = paymentId;
        result.description = 'Оплата участия в Чемпионате';
        result.totalSum = this.sumTotal;

        
        // IMPL new Date().toLocaleString()
        //console.log(result);

        this._ykpService.addPart(result)
            .subscribe((response) => { 
                //console.log(response.url);
                
                this.goToUrl(response.url); 
            }, (error) => {
                console.log(error);
            });
    }

    computeTotal(): number {
        let i = 0;
        this.currentUser.nominations.forEach(element => {
            if (element.isSelected) {
                i = i + element.price;
            }
        });
        return i;
    }

    onChanges(): void {
        this.sumTotal = this.computeTotal();
        if (this.sumTotal > 0) {
            (this.complexForm.controls['nominations']).setErrors(null)
        }
    }



    getInfo() {

        let paymentId: string = '23ecf75e-000f-5000-8000-149fe17e1ffa';
        this.IsWait = true;
        // this.check.getPayment(paymentId)
        //     .then((result) => {

        //         this.sendUserInfo(result.id);
        //         this.goToUrl(result.id);

        //         //return result.id;
        //         //console.log(result);
        //         //console.log(myString1);

        //         //let json = result.json();
        //         //console.log(getString);

        //         //console.log({ payment: result });
        //     })
        //     .catch((err) => {
        //         this.sendUserInfo('Something wrong!!!');
        //         console.error(err);

        //     });

    }

    testClick2(): void {
        this.IsWait = true;
        //this.getInfo().then()
        this.IsWait = false;
    }

    getSomeString(): string {
        return 'someString';
    }

    goToUrl(urlString: string): void {
        //this.document.location.href = 'https://stackoverflow.com/' + urlString + "/";
        this.document.location.href = urlString;
    }


    createPayment(): void {
        this.IsWait = true;
        const idempotenceKey = uuid.v4();
        let description = 'Оплата участия в Чемпионате';
        this.currentUser.description = 'Оплата участия в Чемпионате';
        

        // this.check.createPayment({
        //     'amount': {
        //         'value': this.sumTotal,
        //         'currency': 'RUB'
        //     },
        //     'payment_method_data': {
        //         'type': 'bank_card'
        //     },
        //     'confirmation': {
        //         'type': 'redirect',
        //         'return_url': 'https://www.merchant-website.com/return_url'
        //     },
        //     'capture': true,
        //     'description': description
        // }, idempotenceKey)
        //     .then((result) => {

        //         this.sendUserInfo(result.id);
        //         this.goToUrl(result.confirmation.confirmation_url);

        //         console.log({ payment: result });
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });

    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);


    matcher = new MyErrorStateMatcher();

}