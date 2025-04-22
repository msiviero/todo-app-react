import { createContext, ProviderProps } from "react";
import { ApiService } from "../service/apiService";

export const ApiServiceContext = ({ value, children }: ProviderProps<ApiService>) => {
  const ApiContext = createContext<ApiService>(value);
  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}
