import styled from "styled-components";

export const GetMoreButton = styled.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;
    border-radius: 30px;
    cursor: pointer;
`

export const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const ThumbnailDiv = styled.div`
    border: 1px solid #BF4F7470;
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    margin-top: 10px;
    margin-left: 5px;
`

export const ThumbnailTitle = styled.p`
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`

export const FavoriteIconContainer = styled.div`
    float: right;
`