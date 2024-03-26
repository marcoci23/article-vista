import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss'
import Button from 'shared/ui/Button/ui/Button';

export const PageError = () => {

    const reload = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError)}>
            ERROR
            <Button onClick={reload}>
                reload
            </Button>
        </div>
    );
};

