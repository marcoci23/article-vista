import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import {Button, ThemeButton } from 'shared/ui/Button';

interface ToggleThemeProps {
    className?: string
}

export const ThemeSwitcher = (props: ToggleThemeProps) => {

    const {className} = props

    const {toggleTheme} = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher,{},[className])} onClick={toggleTheme}>
            TOGGLE THEME
        </Button>
    );
};

