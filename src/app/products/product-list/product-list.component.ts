import { Component, inject } from '@angular/core'; // Dodaj inject
import { CommonModule } from '@angular/common'; // Dodaj CommonModule dla pipe 'async'
import { ProductService } from '../product.service'; // Sprawdź poprawną ścieżkę do serwisu

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // To naprawi błąd "No pipe found with name 'async'"
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products$ = this.productService.getProducts();
}