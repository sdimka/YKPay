import { Component, OnInit, Inject } from '@angular/core';
import { User } from './user';
import { YandexCheckout } from 'yandex-checkout';
import { uuid } from 'uuid';
import { stringify } from 'querystring';

import { DOCUMENT } from '@angular/common';
import { promise } from 'protractor';

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


    currentUser: User = new User();

    sumTotal: number = 0;

    myString: string;

    IsWait: boolean = false;

    ngOnInit(): void {
        
     }

    constructor(@Inject(DOCUMENT) private document: any) {
            //@Inject(DOCUMENT)
     }

    selectCourse(courseNumber: number, part: boolean): void {
        if (part) {
            this.selectPart = false;
            this.fillForm = true;
            this.selectedCourse = courseNumber;
        } else {
            this.selectPart = true;
            this.fillForm = false;
            this.selectedCourse = 0;
        }

    }

    testClick(): void {
        console.log(this.currentUser.name);
        console.log(this.currentUser.surname);
        console.log(this.computeTotal());
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
        let myString1;
        this.IsWait = true;
        this.check.getPayment(paymentId)
            .then( (result) => {
                this.goToUrl(result.id);
                //return result.id;
                //console.log(result);
                //console.log(myString1);
                
                //let json = result.json();
                //console.log(getString);
                
                //console.log({ payment: result });
            })
            .catch((err) => {
                
                console.error(err);
                
            });   
            
    }

    testClick2(): void {
        this.IsWait = true;
        //this.getInfo().then()
        this.IsWait = false;
    }

    getSomeString(): string{
        return 'someString';
    }

    goToUrl( urlString : string): void {
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

    objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
}