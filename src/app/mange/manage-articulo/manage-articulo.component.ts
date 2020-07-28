import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo } from '../../models/articulo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-articulo',
  templateUrl: './manage-articulo.component.html',
  styleUrls: ['./manage-articulo.component.css']
})
export class ManageArticuloComponent implements OnInit {

  title = 'Manage Articulo';
  articulos: Articulo;
  error: string;

  categoryName: string;
  description: string;
  url: string;
  technology: string;

  p: Number = 1;
  count: Number = 10;

  constructor(private articuloService: ArticuloService, private location: Location) { }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe(
      (data: Articulo) => this.articulos = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.articuloService.deleteArticulo(+id).subscribe(
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
