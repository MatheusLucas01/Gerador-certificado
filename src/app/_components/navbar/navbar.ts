import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  // útil para carregar dados iniciais ou configurar o componente
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem(): void {
    console.log('Navbar carregada com sucesso!');
  }
}
