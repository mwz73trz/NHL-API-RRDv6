import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import nhlAPI from "../api/nhlAPI";

export default function Team() {
  let { teamId } = useParams();
  const [team, setTeam] = useState([]);
  const [venue, setVenue] = useState([]);
  const [conference, setConference] = useState([]);
  const [division, setDivision] = useState([]);

  const getTeam = async () => {
    let teamData = await nhlAPI.getTeamById(parseInt(teamId));
    let venueData = await nhlAPI.getTeamVenue(parseInt(teamId));
    let conferenceData = await nhlAPI.getTeamConference(parseInt(teamId));
    let divisionData = await nhlAPI.getTeamDivision(parseInt(teamId));
    if (teamData && venueData && conferenceData && divisionData) {
      setTeam(teamData);
      setVenue(venueData);
      setConference(conferenceData);
      setDivision(divisionData);
    }
  };
  useEffect(
    () => {
      getTeam();
    },
    [team],
    [venue],
    [conference]
  );

  return (
    <main style={{ padding: "1rem" }}>
      <h1>{team.name}</h1>
      <h2>Stadium/Venue: {venue.name}</h2>
      <h2>City: {venue.city}</h2>
      <h2>Conference: {conference.name}</h2>
      <h2>Division: {division.name}</h2>
    </main>
  );
}
