import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import nhlAPI from "../api/nhlAPI";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  async function getTeams() {
    let teamsData = await nhlAPI.getTeams();
    if (!teamsData.error) {
      setTeams(teamsData);
    }
  }
  useEffect(() => {
    getTeams();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {teams.map((team) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/teams/${team.id}`}
            key={team.id}
          >
            {team.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
