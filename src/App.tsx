import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import MainPage from '../src/Pages/MainPage/MainPage'
import {AboutPageAsync} from '../src/Pages/AboutPage/AboutPage.async'
import {Suspense} from 'react'
import { useTheme } from './theme/themeContext/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {

   const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <Link to={'/'}>MAIN</Link>
            <Link to={'/about'}>ABOUT</Link>
            <button onClick={toggleTheme}>Theme</button>
            <Suspense fallback={<div>Loading...</div>} >
                <Routes>
                    <Route path='/' element={<MainPage/>} />
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                </Routes>
            </Suspense>
            
        </div>
    )
}

export default App