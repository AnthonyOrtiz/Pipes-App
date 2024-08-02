import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string = 'anthony';
  public nameUpper:string = 'ANTHONY';
  public fullName:string = 'AnThonY';

  public customDate:Date = new Date();
}
