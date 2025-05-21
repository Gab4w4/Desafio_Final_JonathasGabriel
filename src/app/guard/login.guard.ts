import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  if(!localStorage.getItem("email")){
    const email = sessionStorage.getItem("email")

    if(!email){
      alert("Usuário não está autenticado!")
      router.navigate([""])
      return false
    }
  }

  return true;
};
