import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';


@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, CarouselComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  
}
