import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;    
`

const TextBox = styled.input`
    border: 0;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 2rem;

    &:focus-visible {
        outline: 0;
    }
`

const Button = styled.button`
    background-color: #00cf00;
    border-radius: 50%;
    border: 0;
    padding: 0.75rem;
    color: #fff;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #efefef;
        color: #4d4d4d;
    }
`

export { Wrapper, Button, TextBox }