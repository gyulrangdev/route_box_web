import { baseApi } from '../baseApi';
import {
  MyInfoRequest,
  MyInfoResponse,
  MyPurchaseRoutesResponse,
  UserProfileResponse,
} from './types';

export const queryKey = {
  userProfile: 'userProfile',
};

export const userInfo = {
  getMyProfile: async (): Promise<UserProfileResponse> => {
    const response = await baseApi.get('users/me/profile');
    return response.json();
  },

  getMyPurchasedRoutes: async (
    page: number,
    pageSize: number
  ): Promise<MyPurchaseRoutesResponse> => {
    const response = await baseApi.get(`purchased-routes?page=${page}&pageSize=${pageSize}`);
    return response.json();
  },

  patchMyInfo: async (data: MyInfoRequest): Promise<MyInfoResponse> => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === 'profileImage' && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      }
    });
    const response = await baseApi.patch('users/me', { body: formData });

    return response.json();
  },

  getUserProfile: async (userId: number): Promise<UserProfileResponse> => {
    const response = await baseApi.get(`users/${userId}/profile`);
    return response.json();
  },
};
