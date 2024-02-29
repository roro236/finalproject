import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools';
import { QueryClient,QueryClientProvider } from 'react-query';
let queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<QueryClientProvider client={queryClient}>
 <App />
 <ReactQueryDevtools></ReactQueryDevtools>
 </QueryClientProvider>
   
);
