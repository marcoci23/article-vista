import { classNames } from "shared/lib/classNames/classNames"
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
    return (
        <div className={classNames(cls.NotFoundPage)}>
            PAGE NOT FOUND
        </div>
    )
}