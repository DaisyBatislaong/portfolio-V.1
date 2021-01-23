import styled from 'styled-components'

export const LinkContainer = styled.ul<{clicked:boolean}> `

@media (max-width: 768px){
padding: 5rem;
height: 100vh;
width: 100vw;
background-color: black; 
color: white;
justify-content: center;
transition: all 0.5s ease;
align-items: center;
left: ${({clicked}) => (clicked ? 0 : "-100rem" )};
z-index: 1;
}
`