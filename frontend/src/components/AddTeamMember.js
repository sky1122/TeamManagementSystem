import React from 'react'
import Info from './Form'

export default function AddTeamMember() {
  return (
    <div>
      <div class="flex flex-col justify-center w-9/12">
        <div><h1>Add a team member</h1></div>
        <p>Set email, location and role</p>
        <div className="divider"></div> 
        <Info />
      </div>
    </div>
  )
}
