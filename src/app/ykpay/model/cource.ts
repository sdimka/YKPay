import { Nomination } from './nomination';

export class Cource {
    id: number;
    cName: string = '';
    cAddress: string = 'Санкт-Петербург, 19 апреля 2019 г., креативное пространство «Ткачи»';
    name: string = '';
    surname: string = '';
    mName: string ='';
    bDay: Date = new Date(1990, 0, 1);
    salon: string;
    mannequin: string = '';
    phone: number;
    email: string;
    nominations: Nomination[];
    confirmPersonal: boolean;
    uuid: string;
    paymentID: string;
    description: string;
    totalSum: number;
}