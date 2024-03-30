import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ThemeButton.CLEAR} onClick={onLogOut}>Log Out</Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={onShowModal}>Log In</Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
};

export default Navbar;