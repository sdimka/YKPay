import { Nomination } from './nomination'
import { Cource } from './cource';

export class CourseT4 extends Cource{
    id: number;
    cName = 'Регистрационная форма для участия в XXI Чемпионате Санкт-Петербурга по парикмахерскому искусству и декоративной косметике (МАСТЕРА ВЗРОСЛЫЕ)';
    name: string = '';
    surname: string = '';
    nominations: Nomination[] = [
        { id: 1, name: 'Подиумный макияж (на модели)', price: 3000, isSelected: false,
        parts: ['', '']},
        { id: 2, name: 'Макияж новобрачной (на модели)', price: 3000, isSelected: false,
        parts: ['', '']},
        { id: 3, name: 'Боди-Арт (на модели)', price: 3000, isSelected: false,
        parts: ['', '']}
    ];
}