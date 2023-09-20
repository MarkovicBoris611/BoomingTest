import React, { useCallback, useMemo, Dispatch, SetStateAction } from "react";
import { PhotoInterface } from "../../store/gallery/types";
import { FavoriteIconContainer, ThumbnailDiv, ThumbnailTitle } from "./Components";
import { ReactComponent as FavoritIcon } from '../../assets/icons/favorite.svg';
import { ReactComponent as NotFavoriteIcon } from '../../assets/icons/notFavorite.svg';
import { favoritePhotoIdsStorage } from "../../constants/constants";

interface ThumbnailInterface {
    item: PhotoInterface;
    goToDetails: () => void;
    favoritePhotoIds: number[];
    setFavoritePhotoIds: Dispatch<SetStateAction<number[]>>;
    [key: string]: any
}

const Thumbnail: React.FC<ThumbnailInterface> = ({ item, goToDetails, favoritePhotoIds, setFavoritePhotoIds }) => {
    const handleClick = useCallback(() => {
        setFavoritePhotoIds((prevIds) => {
            const isFavorite = prevIds.includes(item.id);
            const updatedIds = isFavorite
                ? prevIds.filter((id) => id !== item.id)
                : [...prevIds, item.id];

            localStorage.setItem(favoritePhotoIdsStorage, JSON.stringify(updatedIds));
            return updatedIds;
        });
    }, [item.id]);

    const isFavorite = useMemo(() => favoritePhotoIds.includes(item.id), [favoritePhotoIds, item.id]);

    return (
        <ThumbnailDiv>
            <FavoriteIconContainer onClick={handleClick}>
                {isFavorite ? <FavoritIcon width={20} height={20} /> : <NotFavoriteIcon width={20} height={20} />}
            </FavoriteIconContainer>
            <img src={item.thumbnailUrl} alt={item.title} />
            <ThumbnailTitle onClick={goToDetails}>{item.title}</ThumbnailTitle>
        </ThumbnailDiv>
    );
};

export default Thumbnail;