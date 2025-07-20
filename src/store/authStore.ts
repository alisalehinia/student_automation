import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  role: string | null;
  login: (accessToken: string, refreshToken: string, role: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  role: null,

  login: (accessToken, refreshToken, role) => {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("role", role);
    set({ isLoggedIn: true, role });
  },

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("role");
    set({ isLoggedIn: false, role: null });
  },

  checkAuth: () => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const role = localStorage.getItem("role");
    set({
      isLoggedIn: !!(accessToken && refreshToken),
      role: role ?? null,
    });
  },
}));
