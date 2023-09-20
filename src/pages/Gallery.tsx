import { useGallery } from "../store/gallery/hook"
import { useCallback, useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { DetailsScreen } from "../constants/ScreenNames"
import Header, { Container } from "../components/common/Header"
import { GetMoreButton, ThumbnailContainer } from "../components/Gallery/Components"
import Thumbnail from "../components/Gallery/Thumbnail"
import { favoritePhotoIdsStorage } from "../constants/constants"

const Gallery = () => {
    const { data, loading, getPhotos } = useGallery()
    const navigate = useNavigate()

    const [page, setPage] = useState<number>(1)
    const [searchStr, setSearchStr] = useState<string | undefined>('')
    const [albumId, setAlbumId] = useState<number | ''>('')
    const [favoritePhotoIds, setFavoritePhotoIds] = useState<number[]>(() => {
        const tempStr = localStorage.getItem(favoritePhotoIdsStorage);
        return tempStr ? JSON.parse(tempStr) : [];
    });

    const getNewPhotos = useCallback(() => {
        getPhotos(page);
        setPage(prev => prev + 1)
    }, [page])

    const goToDetails = useCallback((id: number) => {
        navigate(`${DetailsScreen}/${id}`)
    }, [navigate])

    const filteredPhoto = useMemo(() => {
        if (!albumId) return data
        else return data.filter(item => item.albumId === albumId)
    }, [data, albumId])

    const photos = useMemo(() => {
        if (!searchStr) return filteredPhoto
        else return filteredPhoto.filter(item => item.title.includes(searchStr))
    }, [filteredPhoto, searchStr])

    return (
        <div>
            <Header
                content="Gallery"
                searchStr={searchStr}
                setSearchStr={setSearchStr}
                albumId={albumId}
                setAlbumId={setAlbumId}
            />

            <ThumbnailContainer>
                {photos.map((item, index) => (
                    <Thumbnail
                        item={item}
                        key={item.id}
                        goToDetails={() => goToDetails(item.id)}
                        favoritePhotoIds={favoritePhotoIds}
                        setFavoritePhotoIds={setFavoritePhotoIds}
                        >
                        {item.title}
                    </Thumbnail>
                ))}
            </ThumbnailContainer>

            <Container>
                {loading ? <div>loading....</div> : <GetMoreButton onClick={getNewPhotos}>Get New Photos</GetMoreButton>}
            </Container>

        </div>
    )
}

export default Gallery