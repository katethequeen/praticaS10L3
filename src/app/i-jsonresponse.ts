import { iProduct } from './i-product';

export interface iJSONresponse {
  products: iProduct[];
  total: number;
  skip: number;
  limit: number;
}
