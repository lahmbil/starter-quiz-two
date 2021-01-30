import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = [];
  private quizzesUrl = 'https://raw.githubusercontent.com/NablaT/starter-quiz-two/master/mock-quiz.json';

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(private http: HttpClient) {
    this.getQuizzes();
  }

  getQuizzes() {
    this.http
    .get<Quiz[]>(this.quizzesUrl)
    .subscribe( (content: Quiz[]) => {
      content.forEach( q => this.quizzes.push(q));
      this.quizzes$.next(this.quizzes);
      console.log(content);
    });
  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    if (quiz === null || quiz.name.length === 0 || quiz.theme.length === 0) {
      return;
    }

    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz) {
    const index = this.quizzes.indexOf(quiz, 0);
    if (index > -1) {
      this.quizzes.splice(index, 1);
    }

    this.quizzes$.next(this.quizzes);
  }
}
