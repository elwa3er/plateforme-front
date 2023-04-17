import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from './category.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'alfrescoId', 'natures', 'edit', 'delete'];

  constructor(private categoryService: CategoryService,private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id)
      .subscribe(() => {
        // remove deleted category from the list
        this.categories = this.categories.filter(category => category.id !== id);
      });
  }
  updateCategory(id: number): void {
    this.router.navigate(['/documents/category', id]);
  }
  
}
