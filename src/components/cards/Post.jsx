import styled from "styled-components";

const PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px;
    border-radius: 10px;
`

const StyledUsername = styled.p`
    font-weight: bold;
    font-size: 18px;
`

const StyledDate = styled.p`
    font-size: 12px;
`
const ContainerText = styled.div`
    margin-top: 20px;
`

function Post () {
    return(
        <PostContainer>
            <StyledUsername>@username</StyledUsername>
            <StyledDate>1 de Janeiro 2025</StyledDate>
            <ContainerText>Esse é um texto teste</ContainerText>
        </PostContainer>
    )
}

export default Post