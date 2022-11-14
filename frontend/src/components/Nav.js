import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div>
            <div className="navbar bg-blue-200">
                <div className="navbar-start">
                <Link to="/">
                    <a className="btn btn-ghost normal-case text-xl">Team Managment</a>
                </Link>
                </div>

                <div className="navbar-end">
                <Link to="/Team"><a className="btn btn-accent">Get started</a></Link>
                </div>
            </div>






        </div>
    )
}
