import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-xl font-bold">welcome to the Team Managment System</p>
                        <Link to="/Team"><button className="btn btn-accent">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
