import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import nhlAPI from "../api/nhlAPI";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

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
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {teams
          .filter((team) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = team.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((team) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/teams/${team.id}`}
              key={team.id}
            >
              {team.id}: {team.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
