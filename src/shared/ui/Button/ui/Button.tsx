import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR =  'clear',
    RED = 'red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className? : string
    children: string
    theme?: ThemeButton
}

const Button:FC<ButtonProps> = (props) => {

    const {className,children,theme,...otherProps} = props

    return (
        <button className={classNames(cls.Button,{},[cls[theme],className]) } {...otherProps}>
            {children}
        </button>
    );
};

export default Button;