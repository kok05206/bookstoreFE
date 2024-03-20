import { SignupProps } from '@/pages/Signup';
import { httpClient, requestHandler } from '@/api/http';

export const signup = async (userData: SignupProps) => {
  return await requestHandler('post', `/users/join`, userData);
};

export const resetRequest = async (data: SignupProps) => {
  return await requestHandler('post', '/users/reset', data);
};

export const resetPassword = async (data: SignupProps) => {
  return await requestHandler('put', '/users/reset', data);
};

interface LoginResponse {
  token: string;
}

export const login = async (data: SignupProps) => {
  const response = await httpClient.post<LoginResponse>('/users/login', data);
  return response.data;
};
