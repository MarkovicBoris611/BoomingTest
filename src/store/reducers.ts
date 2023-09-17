import { combineReducers } from '@reduxjs/toolkit';

import galleryReducer, { initialState as initialGalleryState } from './gallery/reducer';
export const initialRootState = {
    gallery: initialGalleryState
}

const rootReducer = combineReducers({
    gallery: galleryReducer
})

export default rootReducer