import { Nomination } from './nomination'

export class User{
    id: number;
    name: string = '';
    surname: string = '';
    nominations: Nomination[] = [
        { id: 1, name: 'Лучшие усы', price: 15, isSelected: false},
        { id: 2, name: 'Лучшие уши', price: 25, isSelected: false},
        { id: 3, name: 'Лучшие носы', price: 35, isSelected: false},
        { id: 4, name: 'Лучшие руки-ножницы', price: 10, isSelected: false},
        { id: 4, name: 'Herb bp njuj vt', price: 50, isSelected: false},
        { id: 4, name: 'Лучшие руки-ножницы', price: 105, isSelected: false},
        { id: 4, name: 'Руки из того места', price: 75, isSelected: false},
        { id: 4, name: 'Лучшие руки-ножницы', price: 60, isSelected: false},
    ];
}