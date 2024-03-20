import { Cart } from '@/models/cart.model';
import { requestHandler } from '@/api/http';

interface AddCartParams {
  bookId: number;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  return await requestHandler('post', '/carts', params);
};

export const fetchCart = async () => {
  return await requestHandler<Cart[]>('get', '/carts');
};

export const deleteCart = async (cartId: number) => {
  return await requestHandler('delete', `/carts/${cartId}`);
};
