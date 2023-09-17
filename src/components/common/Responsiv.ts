import styled from 'styled-components'

const getWidthString = (span: number) => {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%`
}

interface ColumnInterface {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export const Column =  styled.div<ColumnInterface>`
    float: left;
    ${({xs}) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px){
        ${({sm}) => sm && getWidthString(sm)}
    }

    @media only screen and (min-width: 992px){
        ${({md}) => md && getWidthString(md)}
    }

    @media only screen and (min-width: 1200px){
        ${({lg}) => lg && getWidthString(lg)}
    }
`

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`