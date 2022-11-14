import React from 'react'

export default function Team(team) {
    return (
        <div className='pr-20'>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">Team Name: {team.team.name}</h2>
                    <p >Description: {team.team.description}</p>
                </div>
            </div>
            
        </div>
    )
}
