export interface ProductProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  path: string;
  brand: string; // Added brand field
}

export const products: ProductProps[] = [
  {
    id: 1,
    imageUrl: "https://placehold.co/600x400",
    name: "Uniqlo T-Shirt, Uniqlo Hoodie, Uniqlo Socks, Uniqlo Blazer",
    price: 179.96, // Sum of individual prices
    path: "uniqlo-collection",
    brand: "uniqlo",
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/600x400",
    name: "H&M Jeans, H&M Sweatshirt, H&M Hat, H&M Blouse",
    price: 139.96, // Sum of individual prices
    path: "hm-collection",
    brand: "h&m",
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/600x400",
    name: "Topshop Dress, Topshop Coat, Topshop Sunglasses",
    price: 209.97, // Sum of individual prices
    path: "topshop-collection",
    brand: "topshop",
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/600x400",
    name: "ASOS Skirt, ASOS Jeans, ASOS Tote Bag",
    price: 154.97, // Sum of individual prices
    path: "asos-collection",
    brand: "asos",
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/600x400",
    name: "Hugo Boss Suit, Hugo Boss Shirt, Hugo Boss Belt",
    price: 549.97, // Sum of individual prices
    path: "hugo-boss-collection",
    brand: "hugo-boss",
  },
  {
    id: 6,
    imageUrl: "https://placehold.co/600x400",
    name: "Adidas Sneakers, Adidas Jacket, Adidas Tracksuit",
    price: 319.97, // Sum of individual prices
    path: "adidas-collection",
    brand: "adidas",
  },
  {
    id: 7,
    imageUrl: "https://placehold.co/600x400",
    name: "Chanel Handbag, Chanel Perfume, Chanel Earrings",
    price: 5499.97, // Sum of individual prices
    path: "chanel-collection",
    brand: "chanel",
  },
  {
    id: 8,
    imageUrl: "https://placehold.co/600x400",
    name: "Louis Vuitton, Louis Vuitton Wallet, Louis Vuitton Scarf",
    price: 1299.97, // Sum of individual prices
    path: "louis-vuitton-collection",
    brand: "loius-vuitton",
  },
  {
    id: 9,
    imageUrl: "https://placehold.co/600x400",
    name: "Calven Klein, Calven Klein Underwear, Calven Klein Jeans",
    price: 449.97, // Sum of individual prices
    path: "calven-klein-collection",
    brand: "calven-klein",
  },
  {
    id: 10,
    imageUrl: "https://placehold.co/600x400",
    name: "Nike Sneakers, Nike Shorts, Nike T-Shirt",
    price: 279.97, // Sum of individual prices
    path: "nike-collection",
    brand: "nike",
  },
  {
    id: 11,
    imageUrl: "https://placehold.co/600x400",
    name: "Zara Dress, Zara Blazer, Zara Shoes",
    price: 259.97, // Sum of individual prices
    path: "zara-collection",
    brand: "zara",
  },
  {
    id: 12,
    imageUrl: "https://placehold.co/600x400",
    name: "Gucci Belt, Gucci Bag, Gucci Sunglasses",
    price: 2899.97, // Sum of individual prices
    path: "gucci-collection",
    brand: "gucci",
  },
  {
    id: 13,
    imageUrl: "https://placehold.co/600x400",
    name: "Prada Shoes, Prada Handbag, Prada Sunglasses",
    price: 3199.97, // Sum of individual prices
    path: "prada-collection",
    brand: "prada",
  },
  {
    id: 14,
    imageUrl: "https://placehold.co/600x400",
    name: "Versace Shirt, Versace Pants, Versace Shoes",
    price: 2099.97, // Sum of individual prices
    path: "versace-collection",
    brand: "versace",
  },
  {
    id: 15,
    imageUrl: "https://placehold.co/600x400",
    name: "Balenciaga T-Shirt, Balenciaga Sneakers, Balenciaga Cap",
    price: 1899.97, // Sum of individual prices
    path: "balenciaga-collection",
    brand: "balenciaga",
  },
  {
    id: 16,
    imageUrl: "https://placehold.co/600x400",
    name: "Burberry Coat, Burberry Scarf, Burberry Wallet",
    price: 1599.97, // Sum of individual prices
    path: "burberry-collection",
    brand: "burberry",
  },
  {
    id: 17,
    imageUrl: "https://placehold.co/600x400",
    name: "Dolce & Gabbana Dress, Dolce & Gabbana Sunglasses, Dolce & Gabbana Bag",
    price: 3499.97, // Sum of individual prices
    path: "dolce-gabbana-collection",
    brand: "dolce-gabbana",
  },
  {
    id: 18,
    imageUrl: "https://placehold.co/600x400",
    name: "Tommy Hilfiger Jeans, Tommy Hilfiger Jacket, Tommy Hilfiger T-Shirt",
    price: 399.97, // Sum of individual prices
    path: "tommy-hilfiger-collection",
    brand: "tommmy-hilfiger",
  },
  {
    id: 19,
    imageUrl: "https://placehold.co/600x400",
    name: "Ralph Lauren Polo, Ralph Lauren Sweater, Ralph Lauren Chinos",
    price: 499.97, // Sum of individual prices
    path: "ralph-lauren-collection",
    brand: "ralph-lauren",
  },
];
