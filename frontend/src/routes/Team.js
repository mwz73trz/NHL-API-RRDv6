import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import nhlAPI from "../api/nhlAPI";

export default function Team() {
  const { teamId } = useParams();
  const [team, setTeam] = useState([]);

  async function getTeam() {
    let teamData = await nhlAPI.getTeamById(parseInt(teamId));
    console.log(teamData);
    if (!teamData.error) {
      setTeam(teamData);
    }
  }
  useEffect(() => {
    getTeam();
    // eslint-disable-next-line
  }, []);

  return (
    <main style={{ padding: "1rem" }}>
      <h2>{team.name}</h2>
      {/* <h3>Stadium/Venue: {team["venue"].name}</h3>
      <h3>City: {team["venue"].city}</h3> */}
    </main>
  );
}
