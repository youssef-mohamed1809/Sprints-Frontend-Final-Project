export interface Product {
  _id: number;
  name: string;
  image: string;
  category_id: string;
  price: number;
  discount: number;
  rating: number;
  rating_count: number;
  is_featured: boolean;
  is_recent: boolean;
  description: string;
  size: string;
  color: string;
}
