import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  student = [
    { id: 1, name: 'Mayoora', gender: 'female' },
    { id: 2, name: 'Amal', gender: 'male' },
    { id: 3, name: 'Kavya', gender: 'female' },
    { id: 4, name: 'Ajal', gender: 'male' },
    { id: 5, name: 'Nandana', gender: 'female' },
    { id: 6, name: 'Dileep', gender: 'male' },
    { id: 7, name: 'Athira', gender: 'female' },
    { id: 8, name: 'Nithin', gender: 'male' },
   
  ];

}
