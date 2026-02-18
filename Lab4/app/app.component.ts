// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent], // Добавляем сюда
  template: `
    <header style="text-align: center; padding: 20px; background: #f8f9fa;">
      <h1>Kaspi Store</h1>
    </header>
    <main>
      <app-product-list></app-product-list>
    </main>
  `,
  styles: [`
    main { padding: 20px; }
  `]
})
export class AppComponent {}
