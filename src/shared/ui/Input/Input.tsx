import { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void,
}

export const Input = memo((props: InputProps) => {

    const { value, onChange,type = 'text', ...otherProps } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={cls.Input}>
            <input type={type} value={value} onChange={onChangeHandler} {...otherProps} />
        </div>
    );
});