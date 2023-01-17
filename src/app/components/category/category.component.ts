import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories : Category[]=[];
currentCategory : Category;
cleanCategory:Category;

constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories()
  {
    return this.categoryService.getCategories()
    .subscribe(response =>
      {
        this.categories = response.data;
      })
  }

  setCurrentCategory(category:Category)
  {
    this.currentCategory = category;
  }

  getCurrentCategory(category:Category)
  {
    if(category == this.currentCategory)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item";
    }
  }

  getAllCategoryClass()
  {
    if(!this.currentCategory)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item";
    }
  }

  currentClean()
  {
    this.currentCategory=this.cleanCategory;
  }

}
