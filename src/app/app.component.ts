import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user:string = "Furkan Erbay";
  product : any = {productId:1,productName:"Defter",categoryId:1,unitPrice:15}
  product2 : any = {productId:2,productName : "Gozluk",categoryId:2,unitPrice:300} 

  products : any = [this.product,this.product2]
}
