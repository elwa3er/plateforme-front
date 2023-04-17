import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryCreateDTO,CategoryUpdateDTO} from '../../models/Category';
import { CategoryService } from '../category.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { NatureCreateDTO } from '../../models/Nature';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm:FormGroup;
  category!: Category;
  isEditMode = false;
  keywords: string[] = [];
  selectable = true;
  removable = true;
  naturesControl: any;
  natures: string[]=[];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.natures = [];
    this.naturesControl = new FormControl();
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      alfrescoId: [''],
      natures: [[]]
    });
    this.naturesControl = this.categoryForm.get('natures');
  }

  ngOnInit(): void {
    // Initialize the form
  this.natures = [];
  this.naturesControl = new FormControl();
  this.categoryForm = this.fb.group({
    name: ['', Validators.required],
    alfrescoId: [''],
    natures: [[]]
  });
  this.naturesControl = this.categoryForm.get('natures');

  // Check if we are in edit mode
  this.route.params.subscribe(params => {
    if (params['id']) {
      this.isEditMode = true;
      this.categoryService.getCategory(params['id']).subscribe(category => {
        
        this.category = category;
        this.categoryForm.patchValue({
          name: category.name,
          alfrescoId: category.alfrescoId,
          natures: category.natures
        });
        if (category.natures.length > 0) {
          category.natures.forEach(nature => {
            this.natures.push(nature.name);
          });
          this.naturesControl.setValue(this.natures);
        }
      });
    }
  });
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.keywords.push(value);
      this.natures.push(value);
      this.categoryForm!.get('natures')?.setValue([...this.categoryForm!.get('natures')?.value, { name: value, alfrescoId: '' }] as NatureCreateDTO[]);
    }
    event.chipInput!.clear();
  }
 
  removeNature(keyword: string): void {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
      const natures = [...this.categoryForm!.get('natures')?.value] as NatureCreateDTO[];
      const filteredNatures = natures.filter((n: NatureCreateDTO) => n.name !== keyword);
      this.categoryForm!.get('natures')?.setValue(filteredNatures);
    }
  }

  onSubmit(): void {
    const formValue = this.categoryForm.value;
    let categoryDTO: CategoryCreateDTO | CategoryUpdateDTO = {
      name: formValue.name,
      alfrescoId: formValue.alfrescoId,
      natures: formValue.natures
    };
    if (this.categoryForm.valid) {
      if (this.isEditMode) {
        // Update an existing category
        categoryDTO = {
          id: this.category.id,
          ...categoryDTO
        } as CategoryUpdateDTO;
        this.categoryService.updateCategory(categoryDTO as CategoryUpdateDTO).subscribe(() => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
      } else {
        // Create a new category
        this.categoryService.createCategory(categoryDTO as CategoryCreateDTO).subscribe(() => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
