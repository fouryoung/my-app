// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://463665571ca4.ngrok.app', // Base URL 설정
    withCredentials: true,
});

// Request interceptor to add JWT token to headers
/*axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken'); // 로컬 스토리지에서 토큰 가져오기
        
    console.log('JWT Token:', token);  // 콘솔에 토큰 출력
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // 토큰 추가
        }
        return config;
    },
    (error) => {
        
        console.error('Axios Error:', error.response); // 에러 로그 출력
        return Promise.reject(error); // 요청 에러 처리
    }
);
*/
export default axiosInstance;
