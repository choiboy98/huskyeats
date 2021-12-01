import * as React from 'react'
import { Link } from 'gatsby'

const Header = () => (
    <header>
        <div className="container">
            <div className="inner-header">
                <div className="logo">
                    <Link to="/">HUSKYEATS</Link>
                </div>
                <div className="navigation">
                    <nav>
                        <Link to="/recipes">Recipes</Link>
                        <Link to="/journal">Journal</Link>
                        <Link to="/mystory">My Story</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

export default Header