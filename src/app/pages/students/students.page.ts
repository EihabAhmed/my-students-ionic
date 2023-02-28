import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

}
