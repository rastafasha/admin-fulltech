import { Component, OnInit } from '@angular/core';
import { DestacadoService } from '../../services/destacado.service';
import { Destacado } from '../../models/destacado';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-destacado',
  templateUrl: './manage-destacado.component.html',
  styleUrls: ['./manage-destacado.component.css']
})
export class ManageDestacadoComponent implements OnInit {

  title = 'Manage Destacado';
  destacados: Destacado;
  error: string;

  categoryName: string;
  description: string;
  url: string;
  technology: string;

  constructor(private destacadoService: DestacadoService, private location: Location) { }

  ngOnInit() {
    this.destacadoService.getDestacados().subscribe(
      (data: Destacado) => this.destacados = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.destacadoService.deleteDestacado(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
