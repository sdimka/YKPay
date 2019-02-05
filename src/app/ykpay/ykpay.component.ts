import {Component, OnInit} from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-ykpay',
    templateUrl: './ykpay.component.html',
    styleUrls: ['./ykpay.component.scss']
})

export class YkpayComponent implements OnInit{

    currentUser: User = new User();

    sumTotal: number = 0;

    ngOnInit(): void{}

    testClick(): void{
        console.log(this.currentUser.name);
        console.log(this.currentUser.surname);
        console.log(this.computeTotal());
    }

    computeTotal(): number{
        let i = 0;
        this.currentUser.nominations.forEach(element => {
            if (element.isSelected) {
                i = i + element.price;
            }
        });
        return i;
    }

    onChanges(): void{
        this.sumTotal = this.computeTotal();
    }
}