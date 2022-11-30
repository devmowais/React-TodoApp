import React from 'react'

export default function Header() {

    return (
        <>
            <header>
                <figure className="brand">TodoApp</figure>
                <nav className="menu">
                    <input type="checkbox" id="menuToggle" />
                    <label htmlFor="menuToggle" className="menu-icon"><i className="fa fa-bars"></i></label>
                    <ul>
                        <a href="#"><li>Todos</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Calender</li></a>
                        <a href="#"><li>Calculation</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </nav>
            </header>
        </>
    )
}
