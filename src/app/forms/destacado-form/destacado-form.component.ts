import { Component, OnInit } from '@angular/core';
import { DestacadoService } from '../../services/destacado.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';

@Component({
  selector: 'app-destacado-form',
  templateUrl: './destacado-form.component.html',
  styleUrls: ['./destacado-form.component.css']
})
export class DestacadoFormComponent implements OnInit {

  public Editor = ClassicEditor;

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  imagePathBackground: string;
  userId: number;

  destacadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private destacadoService: DestacadoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }




  ngOnInit() {
    window.scrollTo(0,0);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit destacado';
      this.destacadoService.getDestacado(+id).subscribe(
        res => {
          this.destacadoForm.patchValue({
            title: res.title,
            technology: res.technology,
            isFeatured: res.isFeatured,
            isActive: res.isActive,
            id: res.id
          });
          this.imagePath = res.image;
          this.imagePathBackground = res.background;
        }
      );
    } else {
      this.pageTitle = 'Create destacado';
    }

    this.destacadoForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      technology: [''],
      isFeatured: ['0'],
      isActive: ['1'],
      image: [''],
      background: [''],
    });

  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.destacadoForm.get('image').setValue(file);
    }
  }
  onSelectedFileBack(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.destacadoForm.get('background').setValue(file);
    }
  }

  get title() { return this.destacadoForm.get('title'); }
  get technology() { return this.destacadoForm.get('technology'); }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.destacadoForm.get('title').value);
    formData.append('technology', this.destacadoForm.get('technology').value);
    formData.append('isFeatured', this.destacadoForm.get('isFeatured').value);
    formData.append('isActive', this.destacadoForm.get('isActive').value);
    formData.append('image', this.destacadoForm.get('image').value);
    formData.append('background', this.destacadoForm.get('background').value);

    const id = this.destacadoForm.get('id').value;

    if (id) {
      this.destacadoService.updateDestacado(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/destacado']);
          }
        },
        error => this.error = error
      );
    } else {
      this.destacadoService.createDestacado(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/destacado']);
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
