import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss'
import { Mods, classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
    RED = 'red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: string
    theme?: ThemeButton
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {

    const { className, children, theme = ThemeButton.CLEAR, disabled, ...otherProps } = props

    const mods: Mods = {
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.Button, mods, [cls[theme], className])}
            disabled={disabled}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}>
            {children}

        </button>
    );
};

