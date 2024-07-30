// localStorageMiddleware.js

export const saveTeamNameToLocalStorage = (teamName) => {
    localStorage.setItem("teamName", teamName);
  };
  
  export const getTeamNameFromLocalStorage = () => {
    return localStorage.getItem("teamName");
  };