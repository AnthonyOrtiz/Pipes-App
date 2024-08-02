import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name:string = 'Anthony';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  public changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }


  //i18Plural
  public clientes: string[] = ['Maria', 'Eduardo', 'Bruce', 'Clarence', 'Lorena','Cynthia','Brenda','Angie','Sebastian','Edison','Jhoan']
  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 esperando.',
    'other' : 'tenemos # clientes esperando'
  }

  public deleteCliente():void{
    this.clientes.shift();
  }


  //KeyValue and Json Pipe
  public person = {
    name: 'Anthony',
    age: 36,
    address: 'Av. Mayacu'
  }


  //Async Pipe
  public myObservableTime:Observable<number> = interval(2000).pipe(
    tap( value => console.log(value) )
  );

  public promiseValue:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promsea.');
      console.log('Tenemos data en la promsea.')
    },3500);
  });



}
