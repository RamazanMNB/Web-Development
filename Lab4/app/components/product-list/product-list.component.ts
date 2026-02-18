import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128Gb черный',
      description: 'Инновационный дизайн, камера 48 Мп и процессор A16 Bionic.',
      price: 395000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h3e/84378448265246.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h1b/84378448330782.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },

    {
        "id": 2,
        "name": "Apple iPhone 15 Pro Max 256Gb серый",
        "description": "Титановый корпус, кнопка Action и самый мощный чип A17 Pro.",
        "price": 585000,
        "rating": 4.9,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/hc1/h21/83559337132062.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/hc1/h21/83559337132062.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h0c/h50/83559337197598.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/"
    },
    {
        "id": 3,
        "name": "Наушники Apple AirPods Pro 2 with Type-C",
        "description": "Улучшенное активное шумоподавление и адаптивный звук.",
        "price": 115000,
        "rating": 4.8,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/hbe/h20/84108189696030.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113577103/"
    },
    {
        "id": 4,
        "name": "Смарт-часы Apple Watch Series 9 GPS 45 мм Midnight",
        "description": "Новый жест двойного смыкания пальцев и более яркий дисплей.",
        "price": 205000,
        "rating": 4.9,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h14/h48/83561657630750.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h48/83561657630750.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h5b/hc8/83561657761822.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-midnight-temno-sinii-113142277/"
    },
    {
        "id": 5,
        "name": "Фен Dyson Supersonic HD15 серый/розовый",
        "description": "Мощный цифровой двигатель и интеллектуальный контроль температуры.",
        "price": 235000,
        "rating": 5.0,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h55/h9f/81335032512542.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h55/h9f/81335032512542.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h4a/h5d/81335032578078.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/dyson-supersonic-hd15-seryi-rozovyi-110821031/"
      },
      {
        "id": 6,
        "name": "Игровая приставка Sony PlayStation 5 Slim",
        "description": "Обновленная версия в компактном дизайне с 1ТБ памяти.",
        "price": 265000,
        "rating": 4.9,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h3d/h0f/84511200542750.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h3d/h0f/84511200542750.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h50/hd1/84511200608286.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/sony-playstation-5-slim-114696085/"
      },
      {
        "id": 7,
        "name": "Яндекс Станция Миди с Алисой черная",
        "description": "Умная колонка с мощным звуком и поддержкой протокола Zigbee.",
        "price": 74000,
        "rating": 4.9,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/84461343703070.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/84461343703070.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h74/ha1/84461343768606.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/jandeks-stantsija-midi-s-alisoi-chernyi-114421107/"
      },
      {
        "id": 8,
        "name": "Планшет Apple iPad Air 2022 Wi-Fi 64Gb серый",
        "description": "Процессор M1, фронтальная камера 12 Мп с функцией «В центре внимания».",
        "price": 315000,
        "rating": 4.9,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h1d/h94/64405364801566.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/h94/64405364801566.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h27/h58/64405367619614.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-64gb-seryi-104235493/"
      },
      {
        "id": 9,
        "name": "Робот-пылесос Xiaomi Mi Robot Vacuum-Mop 2 Ultra",
        "description": "Высокая мощность всасывания и умная лазерная навигация.",
        "price": 185000,
        "rating": 4.7,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h5b/h6c/64383132631070.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h5b/h6c/64383132631070.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h50/h4a/64383135252510.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-ultra-chernyi-103554301/"
      },
      {
        "id": 10,
        "name": "Ноутбук Apple MacBook Air 13 M2 8GB/256GB Midnight",
        "description": "Тонкий корпус, дисплей Liquid Retina и до 18 часов работы.",
        "price": 525000,
        "rating": 5.0,
        "image": "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8c/64392485437470.jpg",
        "images": [
          "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8c/64392485437470.jpg",
          "https://resources.cdn-kaspi.kz/img/m/p/h51/h1d/64392488386590.jpg"
        ],
        "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105514104/"
      }

  ];

}
