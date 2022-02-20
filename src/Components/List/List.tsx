import { Fragment, ReactElement } from 'react'

import { ListItem, Label, DeleteIcon } from './ListStyled'

type ListProps = {
    members: any[],
    onDeleteClick: (id: number) => void
    onCheckboxCallback: (id: number, markAsComplete: boolean) => void
}

const List = (props: ListProps): ReactElement => {
    const membersList = props.members.map((member): ReactElement => (
        <ListItem key={member.id}>
            <input type='checkbox' checked={member.completed} onChange={() => props.onCheckboxCallback(member.id, !member.completed)} />
            <Label completed={member.completed}>{member.text}</Label>
            <DeleteIcon onClick={(): void => { props.onDeleteClick(member.id) }}>X</DeleteIcon>
        </ListItem>
    ))

    return (
        <Fragment>
            { membersList }
        </Fragment>
    )
}

export default List