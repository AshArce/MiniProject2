
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/index';

const theme = createTheme();
const router = createBrowserRouter(routes)

function App() {


  return (

    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App;
