import { useParams, useNavigate } from 'react-router-dom'
import { useGallery } from '../store/gallery/hook'
import { useCallback } from 'react'
import { GalleryScreen } from '../constants/ScreenNames'

import { AlbumId } from '../components/Details/Components'
import Header, { Container } from '../components/common/Header'

interface ParamInterface {
    id?: number
}

const Details = () => {
    const { data } = useGallery()
    const params: ParamInterface = useParams()
    const navigate = useNavigate()

    const goBack = useCallback(() => {
        navigate(GalleryScreen)
    }, [navigate])

    if(!params.id){
        console.log("invalid photo id")
        navigate(GalleryScreen)
    }

    const photoData = data[params.id as number]

    return (
        <div>
            <Header goBack={goBack} content={photoData.title}/>
            <AlbumId>AlbumID: {photoData.albumId}</AlbumId>
            <Container>
                <img src={photoData.url} alt='photo'/>
            </Container>
        </div>
    )
}

export default Details