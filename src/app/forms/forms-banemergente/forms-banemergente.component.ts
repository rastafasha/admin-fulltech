import { Component, OnInit } from '@angular/core';
import { BannemergenteService } from '../../services/ban-emergente.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forms-banemergente',
  templateUrl: './forms-banemergente.component.html',
  styleUrls: ['./forms-banemergente.component.css']
})
export class FormsBanemergenteComponent implements OnInit {

  
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;

  emergenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bannemergenteService: BannemergenteService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Banner Emergente';
      this.bannemergenteService.getBanemergente(+id).subscribe(
        res => {
          this.emergenteForm.patchValue({
            enlace: res.enlace,
            target: res.target,
            titulo: res.titulo,
            is_active: res.is_active,
            id: res.id
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Create Banner Emergente';
    }

    this.emergenteForm = this.fb.group({
      id: [''],
      enlace: ['', Validators.required],
      target: ['', Validators.required],
      titulo: [''],
      is_active: [''],
      image: [''],
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.emergenteForm.get('image').setValue(file);
    }
  }

  get enlace() { return this.emergenteForm.get('enlace'); }
  get target() { return this.emergenteForm.get('target'); }
  get titulo() { return this.emergenteForm.get('titulo'); }
  get is_active() { return this.emergenteForm.get('is_active'); }

  onSubmit () {
    const formData = new FormData();
    formData.append('enlace', this.emergenteForm.get('enlace').value);
    formData.append('target', this.emergenteForm.get('target').value);
    formData.append('titulo', this.emergenteForm.get('titulo').value);
    formData.append('is_active', this.emergenteForm.get('is_active').value);
    formData.append('image', this.emergenteForm.get('image').value);

    const id = this.emergenteForm.get('id').value;

    if (id) {
      this.bannemergenteService.updateBanemergente(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/banner-emergente']);
          }
        },
        error => this.error = error
      );
    } else {
      this.bannemergenteService.createBanemergente(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/banner-emergente']);
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
