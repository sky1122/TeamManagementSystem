import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Team from './Team'
const TEAM_APIT = "http://127.0.0.1:8000/api/team";

export default function TeamList() {

  const [teams, setTeams] = useState();
  useEffect(() => {
    axios.get(TEAM_APIT).then((Response) => {
      setTeams(Response.data);
    });
  }, []);
  return (
    <div>
      {teams ? teams.map((team) => {
        return (
          <Link to={`/Team/${team.id}`} state={{teamId: team.id, teamName: team.name}}>
            <Team team={team} key={team.id}/>
          </Link>
        )
      }) : null}
    </div>
  )
}
