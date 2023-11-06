import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './themes/theme.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
 <ChakraProvider theme={theme}>
  <React.StrictMode>
   <BrowserRouter>
    <QueryClientProvider client={queryClient}>
     <App />
    </QueryClientProvider>
   </BrowserRouter>
  </React.StrictMode>
 </ChakraProvider>
);
