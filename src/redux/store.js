import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './exampleslice';

const store = configureStore({

reducer: {
    example: exampleReducer, 
  },
});

export default store;
