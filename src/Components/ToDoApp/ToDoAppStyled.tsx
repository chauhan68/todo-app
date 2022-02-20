import styled from 'styled-components'

const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 0.25rem 0.25rem #bdbdbd;
    border-radius: 1rem;
    margin: 2rem auto;
    padding-bottom: 1rem;
    width: 50vw;
`

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    width: 100%;
`

export { App, TabContainer }
