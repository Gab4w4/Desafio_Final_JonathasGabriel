import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  router = inject(Router)
  goToHome(){
    this.router.navigate(["home"])
  }
  
  goToDashboard(){
    this.router.navigate(["dashboard"])
  }

  goToContact(){
    this.router.navigate(["contact"])
  }
}
