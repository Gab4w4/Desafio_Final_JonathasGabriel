import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  showPopup = false;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoContato: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  formatPhoneNumber(event: any) {
    let input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue = '(' + value.substring(0, 2);
    }
    if (value.length > 2) {
      formattedValue += ') ' + value.substring(2, 7);
    }
    if (value.length > 7) {
      formattedValue += '-' + value.substring(7, 11);
    }
    
    this.contactForm.patchValue({
      telefone: formattedValue
    });
  }

  getTipoContatoText(value: string): string {
    switch(value) {
      case '1': return 'Elogio';
      case '2': return 'Reclamação';
      case '3': return 'Solicitação';
      default: return value;
    }
  }

  onSubmit() {
  this.contactForm.markAllAsTouched();
  
  if (this.contactForm.valid) {
    this.submittedData = {...this.contactForm.value}; 
    this.showPopup = true;
  }
}

  confirmSubmission() {
    if (this.submittedData) {
      console.log('Dados submetidos:', this.submittedData);
      alert(`Obrigado sr(a) ${this.submittedData.nome}! Seus dados foram encaminhados com sucesso.`);
      this.showPopup = false;
      this.contactForm.reset();
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}