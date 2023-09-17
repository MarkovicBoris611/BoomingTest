import { useSelector } from 'react-redux'
import { RootState } from '../types'

import useActionCreator from '../hook'
import { resetAll } from './reducer'
import { getPhotos } from './actions'
import { GalleryHookInterface } from './types'

export const useGallery = (): GalleryHookInterface => {
    const data = useSelector((state: RootState) => state.gallery)

    return{
        ...data,
        resetAll: useActionCreator(resetAll),
        getPhotos: useActionCreator(getPhotos)
    }
}