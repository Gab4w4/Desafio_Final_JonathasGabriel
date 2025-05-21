import { AfterViewInit, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent{
  loginService = inject(LoginService)
  router = inject(Router)
  
  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
    logado: new FormControl(false)
  })

  saveUser(){
    
  }

  buttonLogin(){
    const { nome, senha, logado } = this.loginForm.value

    if(!this.loginForm.valid || !nome || !senha){
      alert("Existem campos não preenchidos!")
      return
    }

    if(logado === true){
      this.loginService.localStorageLogin(nome, senha).subscribe({
        error: (err) => {
          if(err.status === 401){
            alert("O usuário e/ou senha incorretos!")
            return
          }
            alert("Erro interno! Tente novamente mais tarde...")
        },

        next: () => {
          this.router.navigate(["/home"])
        }
      })
    }else{
      this.loginService.login(nome, senha).subscribe({
        error: (err) => {
          if(err.status === 401){
            alert("O usuário e/ou senha incorretos!")
            return
          }
            alert("Erro interno! Tente novamente mais tarde...")
        },

        next: () => {
          this.router.navigate(["/home"])
        }

      })
    }
  }
}
