import { PhotoInterface } from "../../store/gallery/types"
import { ThumbnailDiv, ThumbnailTitle } from "./Components"

interface ThumbnailInterface {
    item: PhotoInterface
    [key: string]: any
}

const Thumbnail = ({item, ...props}: ThumbnailInterface) => {
    return(
        <ThumbnailDiv {...props}>
            <img src={item.thumbnailUrl} />
            <ThumbnailTitle>{item.title}</ThumbnailTitle>
        </ThumbnailDiv>
    )
}

export default Thumbnail