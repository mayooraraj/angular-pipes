import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.scss']
})
export class InbuiltComponent {

  public text:string ='Hai mayoora welcome to angular pipes';
  public lower:string ="TEXT CONVERTED TO LOWER CASE";

  today:number=Date.now();

  a:number=0.3656767;

  b:number =3;
}
