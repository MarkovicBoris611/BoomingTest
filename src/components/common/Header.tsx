import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;
    position: absolute;
    left: 16px;
`

export const HeaderText = styled.p`
    font-size: 24px;
    line-height: 30px;
    color: #BF4F74;
`

const Input = styled.input`
    position: absolute;
    right: 16px;
    padding: 10px;
    border-radius: 30px;
`

interface HeaderInterface {
    goBack?: () => void;
    content: string;
    searchStr?: string | undefined;
    setSearchStr?: (str: string | undefined) => void;
}

const Header = ({ goBack, content, searchStr, setSearchStr }: HeaderInterface) => {
    return (
        <Container>
            {goBack && <Button onClick={goBack}>Back</Button>}
            <HeaderText>{content}</HeaderText>
            {setSearchStr && <Input
                value={searchStr}
                placeholder="Type here to search by title"
                onChange={e => setSearchStr(e.target.value)}
            />}
        </Container>
    )
}

export default Header