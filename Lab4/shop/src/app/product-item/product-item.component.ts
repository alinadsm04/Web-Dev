import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product
  @Output() deleteIntent = new EventEmitter<number>()
  @Output() manageLikeIntent = new EventEmitter<number>()


  share(link: string) {
    const shareMessage = `Я делюсь с тобой ссылкой на крутой продукт:  ${link}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  delete(id: number){
    this.deleteIntent.emit(id)
  }

  manageLike(id: number){
    this.manageLikeIntent.emit(id)
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  }
}
