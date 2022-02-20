import styled from 'styled-components'

const Button = styled.button<{ isActive: Boolean }>`
background-color: ${(props) => props.isActive ? '#aaffff' : 'transparent'};
border: 0;
border-top-left-radius: 1rem;
padding: 1rem 2rem;
flex: 1;
font-size: 2rem;
color: #4d4d4d;

&:not(:first-child, :last-child) {
    border-width: 0 2px;
    border-color: #efefef;
    border-style: solid;
    border-radius: 0;
}

&:last-child {
    border-radius: 0 1rem 0 0;
}

&:hover {
    background-color: #dff;
    cursor: pointer;
}
`

export { Button }
