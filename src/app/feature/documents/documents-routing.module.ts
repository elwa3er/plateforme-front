import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsGuard } from './documents.guard';
import { CategoryComponent } from './category/category.component';
import { CategoryGuard } from './category/category.guard';
import { CategoryFormComponent } from './category/category-form/category-form.component';

const routes: Routes = [
  {
    path: 'category',
    canActivate: [DocumentsGuard, CategoryGuard],
    children: [
      {
        path: '',
        component: CategoryComponent
      },
      {
        path: 'create',
        component: CategoryFormComponent
      },
      {
        path: ':id',
        component: CategoryFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
