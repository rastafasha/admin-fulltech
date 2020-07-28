import { Component, OnInit } from '@angular/core';
import { BannemergenteService } from '../../services/ban-emergente.service';
import { Banemergente } from '../../models/ban-emergente';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';

@Component({
  selector: 'app-manage-bannemergente',
  templateUrl: './manage-bannemergente.component.html',
  styleUrls: ['./manage-bannemergente.component.css']
})
export class ManageBannemergenteComponent implements OnInit {

  title = 'Manage Banner Emergente';
  banemergentes: Banemergente;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 10;

  constructor(
    public bannemergenteService: BannemergenteService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.bannemergenteService.getBanemergentes().subscribe(
      (data: Banemergente) => this.banemergentes = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.bannemergenteService.deleteBanemergente(+id).subscribe(
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
