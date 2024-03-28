import React, { useState } from 'react';
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toogle</button>
            <div className={cls.switchers}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>MAIN</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>ABOUT</AppLink>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
