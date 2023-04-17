import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category,CategoryCreateDTO,CategoryUpdateDTO} from '../models/Category';
import { DocumentsService } from '../document.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private readonly apiUrl = 'categories';

  constructor(private http: HttpClient, private documentsService: DocumentsService) { }

  getCategory(id: number): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;
    return this.documentsService.get<Category>(url);
  }

  getCategories(): Observable<Category[]> {
    return this.documentsService.get<Category[]>(this.apiUrl);
  }

  createCategory(category: CategoryCreateDTO): Observable<Category> {
    return this.documentsService.post<Category>(this.apiUrl, category);
  }

  updateCategory(category: CategoryUpdateDTO): Observable<Category> {
    console.log(category,'******')
    const url = `${this.apiUrl}`;
    return this.documentsService.put<Category>(url, category);
  }

  deleteCategory(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.documentsService.delete(url);
  }
}
