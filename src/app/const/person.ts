export const personalDataOptions = [
  {
    id: 0,
    age: 29,
    gender: "non-binary",
    location: "Canada",
    brand: "Uniqlo",
    shoeSize: 8,
  },
  {
    id: 1,
    age: 20,
    gender: "female",
    location: "UK",
    brand: "Topshop",
    shoeSize: 6,
  },
  {
    id: 2,
    age: 45,
    gender: "male",
    location: "Germany",
    brand: "Hugo Boss",
    shoeSize: 9,
  },
  {
    id: 3,
    age: 60,
    gender: "female",
    location: "France",
    brand: "Chanel",
    shoeSize: 7,
  },
];

export interface PersonalDataProps {
  id: number;
  age: number;
  gender: string;
  location: string;
  brand: string;
  shoeSize: number;
}
