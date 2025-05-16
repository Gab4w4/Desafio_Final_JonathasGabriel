import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CarTableComponent } from '../../components/car-table/car-table.component';
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo, VinInfos } from '../../models/car';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CarTableComponent, SidebarComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  dashboardService = inject(DashboardService)
  router = inject(Router)

  veiculos: Veiculo[] = []
  veiculoSelecionado: Veiculo = { id: -1, connected: 0, volumetotal: 0, softwareUpdates: 0, vehicle: "", img: "", vin: "" }

  vinInfos: VinInfos = { id: -1, lat: 0, long: 0, nivelCombustivel: 0, status: "", odometro: 0}

  ngOnInit(){
    this.dashboardService.getVeiculos().subscribe({
      error: () => {},
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos) as Veiculo[]
        this.veiculoSelecionado = veiculos[0]

        this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
          error: () => {},
          next: (vinInfos) =>{
            this.vinInfos = vinInfos
          }
        })
      }
    })
  }

  onChangeSelect(event: Event){
    const id = Number((event.target as HTMLSelectElement).value)
    const veiculo = this.veiculos.find((veiculo) => veiculo.id === id)

    if(veiculo){
      this.veiculoSelecionado = veiculo
    }

    this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
      error: () => {},
      next: (vinInfos) => {
        this.vinInfos = vinInfos
      }
    })
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
