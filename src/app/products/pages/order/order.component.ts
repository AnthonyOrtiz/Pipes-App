import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?:keyof Hero;

  public heros:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Lintera Verde',
      canFly: true,
      color: Color.green
    }
  ]

  public toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }


  public changeOrder(value: keyof Hero):void{
    this.orderBy = value;
  }
}
