import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, FooterComponent, SidebarComponent,  HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

}
