import axios from "axios";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const refreshAccessToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");

  const response = await axiosInstance.post("/auth/refresh-token", {
    refresh_token,
  });

  const { access_token } = response.data;
  localStorage.setItem("access_token", access_token);

  return access_token;
};


// Add Authorization token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 error
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);

    if(response?.status !==200){
      if(response?.status !==204) {
        toast.success(response?.data?.msg);
      } else {
        toast.success('با موفقیت پاک شد')
      }
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if(error.response?.status !== 401 ) {
      toast.error(error?.response?.data?.msg)
    }
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refresh_token")
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.clear();
        window.location.href = "/auth/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
