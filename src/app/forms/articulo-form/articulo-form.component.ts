import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent implements OnInit {

  public Editor = ClassicEditor;

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  userId: number;

  articuloForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articuloService: ArticuloService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }




  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Artículo';
      this.articuloService.getArticulo(+id).subscribe(
        res => {
          this.articuloForm.patchValue({
            title: res.title,
            technology: res.technology,
            popup: res.popup,
            description: res.description,
            isFeatured: res.isFeatured,
            isActive: res.isActive,
            id: res.id,
            categoryId: res.categoryId
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Create Artículo';
    }

    this.articuloForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      technology: [''],
      popup: ['', Validators.required],
      description: [''],
      isFeatured: ['0'],
      isActive: ['1'],
      image: [''],
      categoryId: ['0']
    });

  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.articuloForm.get('image').setValue(file);
    }
  }

  get title() { return this.articuloForm.get('title'); }
  get technology() { return this.articuloForm.get('technology'); }
  get popup() { return this.articuloForm.get('popup'); }
  get description() { return this.articuloForm.get('description'); }
  get categoryId() { return this.articuloForm.get('categoryId'); }

  onSubmit() {
    window.scrollTo(0,0);
    
    const formData = new FormData();
    formData.append('title', this.articuloForm.get('title').value);
    formData.append('technology', this.articuloForm.get('technology').value);
    formData.append('popup', this.articuloForm.get('popup').value);
    formData.append('description', this.articuloForm.get('description').value);
    formData.append('isFeatured', this.articuloForm.get('isFeatured').value);
    formData.append('isActive', this.articuloForm.get('isActive').value);
    formData.append('image', this.articuloForm.get('image').value);
    formData.append('categoryId', this.articuloForm.get('categoryId').value);

    const id = this.articuloForm.get('id').value;

    if (id) {
      this.articuloService.updateArticulo(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/articulo']);
          }
        },
        error => this.error = error
      );
    } else {
      this.articuloService.createArticulo(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/articulo']);
          }
        },
        error => this.error = error
      );
    }
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
