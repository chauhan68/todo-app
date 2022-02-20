import { ReactElement, useState, FormEvent, KeyboardEvent } from 'react'
import { Wrapper, TextBox, Button } from './InputStyled'

type InputProps = {
    onAddCallback: (val: string) => void
}

const Input = (props: InputProps): ReactElement => {
    const [isButtonDisabled, setButtonDisabledState] = useState(true)
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event: FormEvent<HTMLInputElement>): void => {
        const value = event?.currentTarget?.value || ''
        setInputValue(value)
        setButtonDisabledState(Boolean(!value))
    }

    const addItem = () => {
        const currentValue = inputValue
        setInputValue('')
        setButtonDisabledState(true)
        props.onAddCallback(currentValue)
    }

    const onKeyPressCallback = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter' && inputValue) {
            event.preventDefault();
            addItem()
        }
    }

    return (
        <Wrapper>
            <TextBox type='text' placeholder='Add item' onChange={onInputChange} value={inputValue} onKeyPress={onKeyPressCallback} />
            <Button disabled={isButtonDisabled} onClick={addItem}>Add</Button>
        </Wrapper>
    )
}

export default Input