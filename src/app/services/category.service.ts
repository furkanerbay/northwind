import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {
  apiUrl = "https://localhost:44329/api/categories/getall";

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    
  }

  getCategories():Observable<ListResponseModel<Category>>
  {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
