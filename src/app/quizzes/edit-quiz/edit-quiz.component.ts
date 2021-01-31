import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';

@Component({
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  private quiz: Quiz;

  constructor(private route: ActivatedRoute, private location: Location, private service: QuizService) {
   }

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id:', id);
    this.service.getQuiz(id).subscribe(quiz => this.quiz = quiz);
  }

}
