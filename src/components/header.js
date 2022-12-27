import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
            <header>
                <figure className="appName"><img src='https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/32/null/external-checklist-software-and-application-xnimrodx-lineal-color-xnimrodx.png'/>TodoApp</figure>
                <nav className="menu">
                    <input type="checkbox" id="menuToggle" />
                    <label htmlFor="menuToggle" className="menu-icon"><i className="fa fa-bars"></i></label>
                    <ul>
                        <Link to="/"><li>Todos</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/calender"><li>Calender</li></Link>
                        <Link to="/calculation"><li>Calculation</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}
