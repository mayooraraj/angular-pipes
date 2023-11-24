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
    { id: 1, name: 'Kavya', gender: 'female' },
    { id: 2, name: 'Ajal', gender: 'male' },
    { id: 1, name: 'Nandana', gender: 'female' },
    { id: 2, name: 'Dileep', gender: 'male' },
    { id: 1, name: 'Athira', gender: 'female' },
    { id: 2, name: 'Nithin', gender: 'male' },
   
  ];

}
