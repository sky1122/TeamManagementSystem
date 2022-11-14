import { React, useState, useEffect } from 'react'
import MemberCard from './MemberCard'
import axios from 'axios';
import Info from './FormCreate'

import { useLocation } from 'react-router-dom'

const TEAM_API = 'http://localhost:8000/api/member?team='

export default function TeamMemberList(team) {
  const location = useLocation();
  const { teamId, teamName } = location.state;

  const [members, setMembers] = useState();

  useEffect(() => {
    axios.get(TEAM_API + teamId).then((Response) => {
      setMembers(Response.data);
    });
  }, []);
  const memberNumbsers = members ? members.length : 0;

  return (
    <div className='bg-blue-100'>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Add a New Team Member Here!</h3>
          <Info teamId={teamId} />
        </div>
      </div>
      <h1 className='text-2xl'>Team {teamName}'s Members are:</h1>
      <h2 className='text-xl'>There are {memberNumbsers} members in this team</h2>
      <label htmlFor="my-modal-3" className="btn">Create a New member</label>
      <div className='className=flex justify-center flex-wrap-reverse'>
      {members ? members.map((member) => {
        return (
          <MemberCard member={member} key={member.id} />
        )
      }) : null}
      </div>
    </div>
  )
}
