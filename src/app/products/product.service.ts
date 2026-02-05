import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  // Tymczasowe dane (Mock API), dopóki nie podepniesz prawdziwego backendu
  private mockProducts: Product[] = [
    { id: 1, name: 'Webaby CRM', description: 'Zarządzanie klientami AI.', price: 499, category: 'SaaS' },
    { id: 2, name: 'SEO Dashboard', description: 'Monitoring pozycji w Google.', price: 299, category: 'Tool' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts); // Zmień na this.http.get<Product[]>('url_api') później
  }
}
