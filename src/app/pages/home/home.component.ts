import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { WelcomeMsgComponent } from '../../components/welcome-msg/welcome-msg.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, WelcomeMsgComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)

  logout(){
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
