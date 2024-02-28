export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string,
  rating: number,
  sourceLink: string,
  category_id: number,
  likeCount: number
}


export const products = [
  {
    id: 1,
    name: 'Видеокарта ASUS GeForce GT1030 GT1030-SL-2G-BRK 2GB',
    price: 46413,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/hd1/64309470167070.jpg?format=gallery-medium",
    rating: 5,
    category_id: 1,
    likeCount: 0,
    description: `-серия: GeForce 10 Series
    -частота графического процессора: 1228 МГц
    -объем видеопамяти: 2.0 Гб
    -тип видеопамяти: GDDR5
    -рекомендуемая мощность блока питания: 300.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/asus-geforce-gt1030-gt1030-sl-2g-brk-2gb-101719070/?c=750000000"
  },
  {
    id: 2,
    name: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ',
    category_id: 3,
    price: 178000,
    likeCount: 0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64345175982110.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce RTX 30 Series\n
    частота графического процессора: до 1837 МГц\n
    объем видеопамяти: 12.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 282.0 мм\n
    рекомендуемая мощность блока питания: 550.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=750000000"
  },
  {
    id: 3,
    name: 'Видеокарта ZOTAC GeForce RTX 3060 Twin Edge 12 ГБ',
    price: 164000,
    category_id: 3,
    likeCount: 0,

    image: "https://resources.cdn-kaspi.kz/img/m/p/h09/h42/64046246789150.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce RTX 30 Series\n
    частота графического процессора: 1777 MHz\n
    объем видеопамяти: 12.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 224.0 мм\n
    рекомендуемая мощность блока питания: 600.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/zotac-geforce-rtx-3060-twin-edge-12-gb-102105290/?c=750000000"
  },
  {
    id: 4,
    name: 'Видеокарта Colorful GTX 1650 EX 4GD6-V 4 Гб',
    price: 76289,
    category_id: 1,
    likeCount: 0,

    image: "https://resources.cdn-kaspi.kz/img/m/p/h26/hd0/84885560295454.jpg?format=gallery-medium",
    rating: 4.5,
    description: `-серия: GeForce 16 Series
    -объем видеопамяти: 4.0 Гб
    -тип видеопамяти: GDDR6
    -длина видеокарты: 222.0 мм
    -рекомендуемая мощность блока питания: 400.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/colorful-gtx-1650-ex-4gd6-v-4-gb-115880032/?c=750000000"
  },
  {
    id: 5,
    name: 'Видеокарта GIGABYTE GeForce RTX 4070 WINDFORCE OC GV-N4070WF3OC-12GD 12 ГБ',
    price: 352000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h30/h02/80270320828446.jpg?format=gallery-medium",
    rating: 4.5,
    category_id: 4,
    likeCount: 0,

    description: `серия: GeForce RTX 40 Series\n
    частота графического процессора: 2490 МГц\n
    объем видеопамяти: 12.0 Гб\n
    тип видеопамяти: GDDR6X\n
    длина видеокарты: 261.0 мм\n
    рекомендуемая мощность блока питания: 650.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4070-windforce-oc-gv-n4070wf3oc-12gd-12-gb-109975420/?c=750000000"
  },
  {
    id: 6,
    name: 'Видеокарта Palit GeForce GTX 1660 Super GP 6 ГБ',
    price: 135000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h88/h29/63822602043422.jpg?format=gallery-medium",
    rating: 5,
    category_id: 1,
    likeCount: 0,

    description: `серия: GeForce 16 Series\n
    частота графического процессора: 1530 МГц (базовая), 1785 МГц (разогнанная)\n
    объем видеопамяти: 6.0 Гб\n
    тип видеопамяти: GDDR6\n
    рекомендуемая мощность блока питания: 450.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-gtx-1660-super-gp-6-gb-100017856/?c=750000000"
  },
  {
    id: 7,
    name: 'Видеокарта Colorful iGame GeForce RTX 3050 Ultra W DUO OC 8G-V 8 ГБ',
    price: 133000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1a/heb/68514888253470.jpg?format=gallery-medium",
    rating: 5,
    category_id: 3,
    likeCount: 0,

    description: `серия: GeForce RTX 30 Series\n
    объем видеопамяти: 8.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 253.0 мм\n
    рекомендуемая мощность блока питания: 600.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/colorful-igame-geforce-rtx-3050-ultra-w-duo-oc-8g-v-8-gb-108702412/?c=750000000"
  },
  {
    id: 8,
    name: 'Видеокарта MSI GTX 1660 SUPER VENTUS XS OC Edition 6 GB',
    price: 129990,
    image: "https://resources.cdn-kaspi.kz/img/m/p/had/hda/63826371739678.jpg?format=gallery-medium",
    rating: 5,
    category_id: 1,
    likeCount: 0,

    description: `-серия: GeForce 16 Series
    -частота графического процессора: 1815 МГц
    -объем видеопамяти: 6.0 Гб
    -тип видеопамяти: GDDR6
    -рекомендуемая мощность блока питания: 450.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/msi-gtx-1660-super-ventus-xs-oc-edition-6-gb-100011456/?c=750000000"
  },
  {
    id: 9,
    name: 'Видеокарта Palit GeForce GTX 1050 Ti STORMX 4 ГБ',
    price: 85000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h88/h29/63822602043422.jpg?format=gallery-medium",
    rating: 5,
    category_id: 1,
    likeCount: 0,

    description: `серия: GeForce 10 Series\n
    частота графического процессора: 1290 МГц\n
    объем видеопамяти: 4.0 Гб\n
    тип видеопамяти: GDDR5\n
    рекомендуемая мощность блока питания: 300.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-gtx-1050-ti-stormx-4-gb-6700826/?c=750000000"
  },
  {
    id: 10,
    name: 'Видеокарта GIGABYTE GeForce RTX 4090 GAMING OC GV-N4090GAMING OC-24GD 24 ГБ',
    price: 1160920,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h41/hd7/64350104453150.jpg?format=gallery-medium",
    rating: 4.5,
    category_id: 4,
    likeCount: 0,

    description: `серия: GeForce RTX 40 Series\n
    частота графического процессора: 2535 МГц\n
    объем видеопамяти: 24.0 Гб\n
    тип видеопамяти: GDDR6X\n
    длина видеокарты: 340.0 мм\n
    рекомендуемая мощность блока питания: 1000.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4090-gaming-oc-gv-n4090gaming-oc-24gd-24-gb-106852889/?c=750000000"
  },
  {
    id: 11,
    name: 'Видеокарта Colorful GeForce RTX 2060 SUPER NB 8G-V 8 ГБ',
    price: 134800,
    image: "https://resources.cdn-kaspi.kz/img/m/p/he7/h5a/68468278067230.jpg?format=gallery-medium",
    rating: 5,
    category_id: 2,
    likeCount: 0,

    description: `-серия: GeForce RTX 20 Series
    -частота графического процессора: 1470 МГц - базовая, 1650 МГц - разогнанная
    -объем видеопамяти: 8.0 Гб
    -тип видеопамяти: GDDR6
    -длина видеокарты: 222.0 мм
    -рекомендуемая мощность блока питания: 550.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/colorful-geforce-rtx-2060-super-nb-8g-v-8-gb-108680611/?c=750000000"
  },
  {
    id: 12,
    name: 'Видеокарта Palit GeForce RTX 2060 Dual 6Gb',
    price: 540000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h59/hf6/63789177307166.jpg?format=gallery-medium",
    rating: 4.5,
    category_id: 2,
    likeCount: 0,

    description: `-серия: GeForce RTX 20 Series
    -частота графического процессора: 1365 МГц (базовая), 1680 МГц (разогнанная)
    -объем видеопамяти: 6.0 Гб
    -тип видеопамяти: GDDR6
    -рекомендуемая мощность блока питания: 500.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-rtx-2060-dual-6gb-6701187/?c=750000000"
  },
  {
    id: 13,
    name: 'Видеокарта KFA2 GeForce RTX 2060 CORE 1-Click OC 26NRL7HP68CK 6GB',
    price: 270000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h4a/h1b/64315364376606.jpg?format=gallery-medium",
    rating: 4.5,
    category_id: 2,
    likeCount: 0,

    description: `-серия: GeForce RTX 20 Series
    -частота графического процессора: 1695 МГц
    -объем видеопамяти: 6.0 Гб
    -тип видеопамяти: GDDR6
    -рекомендуемая мощность блока питания: 500.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-rtx-2060-dual-6gb-6701187/?c=750000000"
  },
  {
    id: 14,
    name: 'Видеокарта Sinotex NINJA GeForce RTX 2060 Super NF206SG86F 8 Гб',
    price: 143630,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h10/h48/84699104706590.jpg?format=gallery-medium",
    rating: 0,
    category_id: 2,
    likeCount: 0,

    description: `-серия: GeForce RTX 20 Series
    -частота графического процессора: Base Clock (MHz) 1470 Boost Clock (MHz) 1650
    -объем видеопамяти: 8.0 Гб
    -тип видеопамяти: GDDR6
    -длина видеокарты: 225.0 мм
    -рекомендуемая мощность блока питания: 550.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/sinotex-ninja-geforce-rtx-2060-super-nf206sg86f-8-gb-115279166/?c=750000000"
  },
  {
    id: 15,
    name: 'Видеокарта Gainward GeForce RTX 2060 Super Ghost NE6206S018P2-1160X-1 8 Гб',
    price: 156500,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc3/h7f/85180153167902.jpg?format=gallery-medium",
    rating: 0,
    category_id: 2,
    likeCount: 0,

    description: `-серия: GeForce RTX 20 Series
    -частота графического процессора: 1650
    -объем видеопамяти: 8.0 Гб
    -ип видеопамяти: GDDR6
    -длина видеокарты: 233.0 мм
    -рекомендуемая мощность блока питания: 550.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/gainward-geforce-rtx-2060-super-ghost-ne6206s018p2-1160x-1-8-gb-102812143/?c=750000000"
  },
  {
    id: 16,
    name: 'Видеокарта Palit GeForce RTX 3080 Ti GameRock 12G NED308T019KB-1020G 12GB',
    price: 369900,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h35/64028248899614.jpg?format=gallery-medium",
    rating: 5,
    category_id: 3,
    likeCount: 0,

    description: `-серия: GeForce RTX 30 Series
    -частота графического процессора: 1365
    -объем видеопамяти: 12.0 Гб
    -тип видеопамяти: GDDR6X
    -длина видеокарты: 304.0 мм
    -рекомендуемая мощность блока питания: 850.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-rtx-3080-ti-gamerock-12g-ned308t019kb-1020g-12gb-101968133/?c=750000000"
  },
  {
    id: 17,
    name: 'Видеокарта Palit GeForce RTX 3070 Ti GamingPro 8 ГБ',
    price: 259999,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd0/h8e/63827788070942.jpg?format=gallery-medium",
    rating: 5,
    category_id: 3,
    likeCount: 0,

    description: `-серия: GeForce RTX 30 Series
    -объем видеопамяти: 8.0 Гб
    -тип видеопамяти: GDDR6X
    -длина видеокарты: 294.0 мм
    -рекомендуемая мощность блока питания: 700.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-rtx-3070-ti-gamingpro-8-gb-101648509/?c=750000000"
  },
  {
    id: 18,
    name: 'Видеокарта ZOTAC GAMING RTX 4060 Twin Edge ZT-D40600E-10M 8 Гб',
    price: 188000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h00/h5a/84727487037470.jpg?format=gallery-medium",
    rating: 5,
    category_id: 4,
    likeCount: 0,

    description: `-серия: GeForce RTX 40 Series
    -частота графического процессора: Boost: 2460 MHz
    -объем видеопамяти: 8.0 Гб
    -тип видеопамяти: GDDR6
    -длина видеокарты: 221.4 мм
    -рекомендуемая мощность блока питания: 500.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/zotac-gaming-rtx-4060-twin-edge-zt-d40600e-10m-8-gb-112525286/?c=750000000"
  },
  {
    id: 19,
    name: 'Видеокарта GIGABYTE GeForce RTX 4060 GAMING OC GV-N4060GAMING OC-8GD 8 Гб',
    price: 199990,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/h3f/82307177611294.jpg?format=gallery-medium",
    rating: 5,
    category_id: 4,
    likeCount: 0,

    description: `-серия: GeForce RTX 40 Series
    -частота графического процессора: Boost: 2460 MHz
    -объем видеопамяти: 8.0 Гб
    -тип видеопамяти: GDDR6
    -длина видеокарты: 221.4 мм
    -рекомендуемая мощность блока питания: 500.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4060-gaming-oc-gv-n4060gaming-oc-8gd-8-gb-112040551/?c=750000000"
  },
  {
    id: 20,
    name: 'Видеокарта ASUS TUF Gaming GeForce RTX 4080 OC TUF-RTX4080-O16G-GAMING 16 ГБ',
    price: 699489,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9f/hd7/65973628567582.jpg?format=gallery-medium",
    rating: 5,
    category_id: 4,
    likeCount: 0,

    description: `-серия: GeForce RTX 40 Series
    -частота графического процессора: 2625 МГц
    -объем видеопамяти: 16.0 Гб
    -тип видеопамяти: GDDR6X
    -рекомендуемая мощность блока питания: 750.0 Вт`,
    sourceLink: "https://kaspi.kz/shop/p/asus-tuf-gaming-geforce-rtx-4080-oc-tuf-rtx4080-o16g-gaming-16-gb-107659842/?c=750000000"
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
