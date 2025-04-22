
export interface AppConfig {
    apiUrl: string;
 }

export const envConfig: AppConfig = {
    apiUrl: import.meta.env.VITE_API_URL
};
