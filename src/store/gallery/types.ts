export interface PhotoInterface {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface GalleryInterface {
    data: PhotoInterface[],
    loading: boolean,
}

export interface GalleryHookInterface extends GalleryInterface{
    resetAll: () => void;
    getPhotos: (page: number) => void;
}