import { IProduct } from "@/types/interface";

const placeholderImageUrl = (text: string) => `https://placehold.co/150x100?text=${encodeURIComponent(text)}`;
export const scrollingProductsSampleData: IProduct[] = [
  {
    id: '1',
    imageUrl: `https://m.media-amazon.com/images/I/61C+zURu0EL._AC_SY200_.jpg`,
    title: 'Samsung 990 PRO 4TB NVMe SSD',
    productLink: 'https://placehold.co/90x100',
  },
  {
    id: '2',
    imageUrl: 'https://m.media-amazon.com/images/I/71RCyId7QIL._AC_SY200_.jpg',
    title: 'Samsung 9100 PRO SSD',
    productLink: '#',
  },
  {
    id: '3',
    imageUrl: 'https://m.media-amazon.com/images/I/61SuPkDGYfL._AC_SY200_.jpg',
    title: 'Samsung 990 EVO Plus 4TB NVMe SSD',
    productLink: '#',
  },
  {
    id: '4',
    imageUrl: 'https://m.media-amazon.com/images/I/51Kpw2r-pIL._AC_SY200_.jpg',
    title: 'ACASIS NVMe SSD Enclosure with cables',
    productLink: '#',
  },
  {
    id: '5',
    imageUrl: 'https://m.media-amazon.com/images/I/61Cev2aFG5L._AC_SY200_.jpg',
    title: 'Lexar NM790 M.2 NVMe SSD',
    productLink: '#',
  },
  {
    id: '6',
    imageUrl: `https://m.media-amazon.com/images/I/41YTYhEzG1L._AC_SY200_.jpg`,
    title: 'Samsung 990 PRO 4TB NVMe SSD',
    productLink: '#',
  },
  {
    id: '7',
    imageUrl: 'https://m.media-amazon.com/images/I/51wDsZxtTLL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '8',
    imageUrl: 'https://m.media-amazon.com/images/I/71QxmOXxYVL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '9',
    imageUrl: 'https://m.media-amazon.com/images/I/719a6tbF1gL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '10',
    imageUrl: 'https://m.media-amazon.com/images/I/71Iwj1RwoxL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '11',
    imageUrl: 'https://m.media-amazon.com/images/I/81NaJ5Xd6SL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '12',
    imageUrl: 'https://m.media-amazon.com/images/I/71zm3gEBCxL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '13',
    imageUrl: 'https://m.media-amazon.com/images/I/61bEle2Z2mL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '14',
    imageUrl: 'https://m.media-amazon.com/images/I/71SDZVqu3+L._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '15',
    imageUrl: 'https://m.media-amazon.com/images/I/9171uzu8PEL._AC_SY200_.jpg',
    title: 'Another Product 2',
    productLink: '#',
  },
  {
    id: '16',
    imageUrl: `${placeholderImageUrl('No Image')}`,
    title: 'Another Product 2',
    productLink: '#',
  },
];
