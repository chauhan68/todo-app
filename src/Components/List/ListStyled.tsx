import styled from 'styled-components'

const ListItem = styled.div`
    display: flex;
    padding: 1rem;
    border-top: 1px solid #efefef;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`

const Label = styled.label< { completed: boolean } >`
    text-align: left;
    width: 100%;
    padding: 0 1rem;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')}
`

const DeleteIcon = styled.button`
    color: #ff0000;
    border: 0;
    background: transparent;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`

export { ListItem, Label, DeleteIcon }
