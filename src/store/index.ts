import { configureStore, EnhancedStore, Middleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import rootReducer from './reducers';
import { Actions, RootState } from './types';

const configureAppStore = (preloadedState?: RootState): EnhancedStore<RootState, Actions> => {
  const devMiddlewares: Middleware[] = [];

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(devMiddlewares),
    preloadedState,
    enhancers: [],
  });


  return store;
};

export const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
