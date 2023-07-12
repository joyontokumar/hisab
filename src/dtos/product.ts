interface Rating {
  count: number;
  rate: number;
}
export default interface ProductDTO {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  id: number;
  rating: Rating;
}
