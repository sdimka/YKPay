import { Nomination } from './nomination'
import { Cource } from './cource';

export class CourseT3 extends Cource{
    id: number;
    cName = 'Регистрационная форма для участия в XXI Чемпионате Санкт-Петербургапо моделированию и дизайну ногтей';
    name: string = '';
    surname: string = '';
    nominations: Nomination[] = [
        { id: 1, name: 'Тип 3', price: 15, isSelected: false,
        parts: ['k', 'k']},
        { id: 2, name: 'Лучшие уши', price: 25, isSelected: false,
        parts: ['k', 'k']},
        { id: 3, name: 'Лучшие носы', price: 35, isSelected: false,
        parts: ['k', 'k']},
        { id: 4, name: 'Лучшие руки-ножницы', price: 10, isSelected: false,
        parts: ['k', 'k']},
        { id: 4, name: 'Herb bp njuj vt', price: 50, isSelected: false,
        parts: ['k', 'k']},
        { id: 4, name: 'Лучшие руки-ножницы', price: 105, isSelected: false,
        parts: ['k', 'k']},
        { id: 4, name: 'Руки из того места', price: 75, isSelected: false,
        parts: ['k', 'k']},
        { id: 4, name: 'Лучшие руки-ножницы', price: 60, isSelected: false,
        parts: ['k', 'k']},
    ];
}