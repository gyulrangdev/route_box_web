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
    // 리펙토링 필요 : 로직 분리
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === 'profileImageUrl' && value instanceof File) {
          // 리펙토링 필요 : submit 전 데이터 변형 어댑터 추가 필요
          formData.append('profileImage', value);
        } else {
          formData.append(key, String(value));
        }
      }
    });
    const response = await baseApi.patch('users/me', {
      headers: {
        'Content-Type': undefined,
      },
      body: formData,
    });

    return response.json();
  },

  getUserProfile: async (userId: number): Promise<UserProfileResponse> => {
    const response = await baseApi.get(`users/${userId}/profile`);
    return response.json();
  },
};
