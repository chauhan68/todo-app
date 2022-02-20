import { ReactElement, useEffect, useState } from 'react'

import Tabs from '../Tabs/Tabs'
import Input from '../Input/Input'
import List from '../List/List'
import { App, TabContainer } from './ToDoAppStyled'

type MembersType = {
    id: number,
    text: string,
    completed: boolean,
}

const ToDoApp = (): ReactElement => {
    const [listArray, updateList] = useState<MembersType[]>([])
    const [activeTabs, updateActiveTabs] = useState([true, false, false])
    const [membersToDisplay, updateMembersToDisplay] = useState(listArray)

    useEffect(() => {
        let newMembersToDisplay = listArray
        if (activeTabs[1]) {
            newMembersToDisplay = listArray.filter(member => !member.completed)
        } else if (activeTabs[2]) {
            newMembersToDisplay = listArray.filter(member => member.completed)
        }
        updateMembersToDisplay(newMembersToDisplay)
    }, [listArray, activeTabs])

    const addNewItem = (text: string): void => {
        const newEntry = {
            id: Math.random() * 10000,
            text,
            completed: false,
        }
        const updatedList = listArray.concat(newEntry)
        updateList(updatedList)
    }

    const removeItem = (id: number) => {
        const updatedList = listArray.filter(list => list.id !== id)
        updateList(updatedList)
    }


    const markCompleted = (id: number, markAsComplete: boolean) => {
        const newList = Array.from(listArray)
        const itemToUpdate = newList.find(list => list.id === id)
        if (itemToUpdate) {
            itemToUpdate.completed = markAsComplete
        }
        updateList(newList)
    }

    const onTabClick = (tabId: number) => {
        const newActiveTabs = activeTabs.map((tab, index) => index === tabId)
        updateActiveTabs(newActiveTabs)
    }

    return (
        <App>
            <TabContainer>
                <Tabs name='All' tabId={0} isActive={activeTabs[0]} onClickCallback={onTabClick} />
                <Tabs name='Active' tabId={1} isActive={activeTabs[1]} onClickCallback={onTabClick} />
                <Tabs name='Completed' tabId={2} isActive={activeTabs[2]} onClickCallback={onTabClick} />
            </TabContainer>
            <Input onAddCallback={addNewItem} />
            <List members={membersToDisplay} onDeleteClick={removeItem} onCheckboxCallback={markCompleted} />
        </App>
    )
}

export default ToDoApp
