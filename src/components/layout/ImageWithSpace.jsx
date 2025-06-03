import styled from "styled-components"

const WIDTH_BREAK = '600px'

const StyledFlex = styled.div`
    display: flex;
`
const StyledImage = styled.div`
 background-image: url('${props => props.image}');
 background-position: right;
 background-repeat: no-repeate;
 background-size: cover;

 width: 100%;
 height: 100vh;
 
 @media (max-width: ${WIDTH_BREAK}){
    display:none;
 }
`
const StyledContainer = styled.div`
 backgroud-color: white;
 padding: 30px;


 @media (min-width: ${WIDTH_BREAK}){
    width: 100px;
    min-width: calc(${WIDTH_BREAK} - 60px);
 }
 @media (max-width: ${WIDTH_BREAK}){
    width: 100px;
 }   
 `

function ImageWithSpace ({ children, image }) {
    return (
        
        <StyledFlex>
            <StyledImage image={image}/>
                <StyledContainer>
                    {children}
                </StyledContainer>
        </StyledFlex>
    
    )
}

ImageWithSpace.defaultProps = {
    image: 'coffee-background.jpg'
}

export default ImageWithSpace