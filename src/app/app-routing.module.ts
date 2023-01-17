import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"products",pathMatch:"full",component:ProductComponent},
  {path:"products/getall",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"categories",component:CategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
