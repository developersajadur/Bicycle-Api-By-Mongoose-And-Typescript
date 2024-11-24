export type Order = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  inStock?: boolean;
  createdAt?: string | unknown;
  updatedAt?: string | unknown;
};
