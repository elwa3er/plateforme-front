import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentsService } from './document.service';
import { DocumentsGuard } from './documents.guard';
import {AngularMaterialModule} from '../../shared/angular-material.module';
import {DocumentRoutingModule} from "./documents-routing.module";
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormComponent
  ],
  imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            AngularMaterialModule,
            DocumentRoutingModule,
            MatChipsModule
  ],
  providers: [DocumentsService, DocumentsGuard],
  exports:[MatChipsModule]
})
export class DocumentsModule {}
