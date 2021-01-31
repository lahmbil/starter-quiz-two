import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
  label: 'Le vainqueur de la finale du 100 mètres aux Jeux Olympiques de 2016 est...',
  answers: [
    {
      value: 'Usain Bolt',
      isCorrect: true,
    },
    {
      value: 'Sonic',
      isCorrect: false,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: 'actors',
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        id: 'sports',
        name: 'Les Sports',
        theme: 'Sport',
        questions: [QUESTION_SPORT],
    }
];
