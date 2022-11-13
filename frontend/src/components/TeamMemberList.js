import { React, useState, useEffect } from 'react'
import MemberCard from './MemberCard'
import axios from 'axios';
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
    <div>
      <h1>Team {teamName}'s Members are:</h1>
      <h2>There are {memberNumbsers} members in this team</h2>

      {members ? members.map((member) => {
        return (
          <MemberCard member={member} key={member.id}/>
        )
      }) : null}
    </div>
  )
}
