import { ReactElement } from 'react'

import { Button } from './TabsStyled'

type TabsProps = {
    name: String,
    isActive: Boolean,
    tabId: number,
    onClickCallback: (tabId: number) => void
}

const Tabs = ({ isActive = false, ...props }: TabsProps): ReactElement => {
    return (
        <Button isActive={isActive} onClick={() => { props.onClickCallback(props.tabId) }}>{props.name}</Button>
    )
}

export default Tabs