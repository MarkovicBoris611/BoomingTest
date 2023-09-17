import { createAsyncThunk } from '@reduxjs/toolkit';
import { galleryLimit } from '../../constants/constants';

export const getPhotos = createAsyncThunk(
    'gallery/getPhotos',
    async (page: number) => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${galleryLimit}`).then(res => res.json());
        return resp
    }
)