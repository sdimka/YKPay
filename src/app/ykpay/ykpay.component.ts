import { Component, OnInit, Inject } from '@angular/core';
import { CourseT1 } from './model/courseT1';
import { CourseT2 } from './model/courseT2';
import { CourseT3 } from './model/courseT3';
import { CourseT4 } from './model/courseT4';
import { YandexCheckout } from 'yandex-checkout';
import { uuid } from 'uuid';

import { YKPService } from './ykpay.service'


import { DOCUMENT } from '@angular/common';
import { Cource } from './model/cource';

@Component({
    selector: 'app-ykpay',
    templateUrl: './ykpay.component.html',
    styleUrls: ['./ykpay.component.scss']
})

export class YkpayComponent implements OnInit {

    selectPart: boolean = true;
    fillForm: boolean = false;
    selectedCourse = 0;

    check = new YandexCheckout('548831', 'test_BXC19NGsNOMn38f1e1t1JBFH4yuieszpj-P0UAb9BLQ');


    currentUser: Cource;

    sumTotal: number = 0;

    myString: string;

    IsWait: boolean = false;

    ngOnInit(): void {

    }

    constructor(@Inject(DOCUMENT) private document: any, private _ykpService: YKPService) {
        //@Inject(DOCUMENT)
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
        }

    }

    testClick(): void {
        console.log(this.currentUser.name);
        console.log(this.currentUser.surname);
        console.log(this.currentUser.bDay);
        console.log(this.computeTotal());
        this.sendUserInfo('Id-kkk-jmmm');
    }


    sendUserInfo(paymentId: string): void {

        this.currentUser.paymentID = paymentId;
        console.log(this.currentUser.bDay);
        // IMPL new Date().toLocaleString()

        this._ykpService.addPart(this.currentUser)
            .subscribe((response) => { console.log(response) }, (error) => {
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
    }



    getInfo() {

        let paymentId: string = '23ecf75e-000f-5000-8000-149fe17e1ffa';
        this.IsWait = true;
        this.check.getPayment(paymentId)
            .then((result) => {
                
                this.sendUserInfo(result.id);
                this.goToUrl(result.id);

                //return result.id;
                //console.log(result);
                //console.log(myString1);

                //let json = result.json();
                //console.log(getString);

                //console.log({ payment: result });
            })
            .catch((err) => {
                this.sendUserInfo('Something wrong!!!');
                console.error(err);

            });

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
        this.document.location.href = 'https://stackoverflow.com/' + urlString + "/";
    }


    createPayment(): void {
        const idempotenceKey = uuid.v4();
        let description = 'Заказ №2';
        this.check.createPayment({
            'amount': {
                'value': '2.00',
                'currency': 'RUB'
            },
            'payment_method_data': {
                'type': 'bank_card'
            },
            'confirmation': {
                'type': 'redirect',
                'return_url': 'https://www.merchant-website.com/return_url'
            },
            'capture': true,
            'description': description
        }, idempotenceKey)
            .then(function (result) {
                console.log({ payment: result });
            })
            .catch(function (err) {
                console.error(err);
            });

    }

}