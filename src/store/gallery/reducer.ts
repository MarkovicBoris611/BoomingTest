import { createSlice } from '@reduxjs/toolkit'
import { GalleryInterface } from './types';
import { getPhotos } from './actions';

export const initialState: GalleryInterface = {
    data: [],
    loading: false
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: { resetAll: () => initialState },
    extraReducers: builder => {
        builder.addCase(getPhotos.pending, state => {
            state.loading = true;
        });
        builder.addCase(getPhotos.fulfilled, (state, action) => {
            const temp = [...state.data, ...action.payload]
            state.data = temp;
            state.loading = false
        });
        builder.addCase(getPhotos.rejected, state => {
            state.loading = false
        })
    }
})

export const resetAll = gallerySlice.actions.resetAll

export default gallerySlice.reducer;