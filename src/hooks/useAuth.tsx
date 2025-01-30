import { storageKey } from '@/constants/storageKey';
import { useNativeBridge } from './useNativeBridge';
import { setTokenHeader } from '@/api/baseApi';
import { toast } from 'react-toastify';
import { useNavigate } from '@tanstack/react-router';

export const useAuth = () => {
  const navigate = useNavigate();
  const { handleLogout } = useNativeBridge();

  const login = () => {};

  const logout = () => {
    window.localStorage.removeItem(storageKey.accessToken);
    handleLogout();
    setTokenHeader(null);
  };

  return { login, logout };
};
