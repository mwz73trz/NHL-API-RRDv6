const BASE_URL = "http://localhost:8000/";

const getInit = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init);
    if (response.ok) {
      if (response.status !== 204) {
        let data = response.json();
        return data;
      } else {
        return { success: true };
      }
    }
  } catch (error) {
    console.error(":ERR:", error);
    return null;
  }
};

const getTeams = async () => {
  let url = `${BASE_URL}api/teams/`;
  return await tryCatchFetch(url, getInit());
};

const getTeamById = async (teamId) => {
  let url = `${BASE_URL}api/teams/${teamId}/`;
  return await tryCatchFetch(url, getInit());
};

const getTeamVenue = async (teamId) => {
  let url = `${BASE_URL}api/teams/${teamId}/venue/`;
  return await tryCatchFetch(url, getInit());
};

const getTeamConference = async (teamId) => {
  let url = `${BASE_URL}api/teams/${teamId}/conference/`;
  return await tryCatchFetch(url, getInit());
};

const getTeamDivision = async (teamId) => {
  let url = `${BASE_URL}api/teams/${teamId}/division/`;
  return await tryCatchFetch(url, getInit());
};
const myExports = {
  getTeams,
  getTeamById,
  getTeamVenue,
  getTeamConference,
  getTeamDivision,
};

export default myExports;
