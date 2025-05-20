import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
  
  logout(){
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
