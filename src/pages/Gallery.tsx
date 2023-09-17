import { useGallery } from "../store/gallery/hook"
import { useCallback, useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { DetailsScreen } from "../constants/ScreenNames"
import Header, { Container } from "../components/common/Header"
import { GetMoreButton, ThumbnailContainer } from "../components/Gallery/Components"
import Thumbnail from "../components/Gallery/Thumbnail"

const Gallery = () => {
    const { data, loading, getPhotos } = useGallery()
    const navigate = useNavigate()

    const [page, setPage] = useState<number>(1)
    const [searchStr, setSearchStr] = useState<string | undefined>('')

    const getNewPhotos = useCallback(() => {
        getPhotos(page);
        setPage(prev => prev + 1)
    }, [page])

    const goToDetails = useCallback((id: number) => {
        navigate(`${DetailsScreen}/${id}`)
    }, [navigate])

    const photos = useMemo(() => {
        if (!searchStr) return data
        else return data.filter(item => item.title.includes(searchStr))
    }, [data, searchStr])

    return (
        <div>
            <Header content="Gallery" searchStr={searchStr} setSearchStr={setSearchStr} />

            <ThumbnailContainer>
                {photos.map((item, index) => (
                    <Thumbnail 
                    item={item}
                    key={item.id} 
                    onClick={() => goToDetails(item.id)}>
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