import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>MAIN</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>ABOUT</AppLink>
            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR} onClick={onShowModal}>Log In</Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};

export default Navbar;