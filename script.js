const levels = [
  {name: "Bloodbath", creator: "Riot", points: 151, ID: 86696764},
  {name: "Acheron", creator: "Zoink", points: 149, ID: 68940983},
  {name: "Slaughterhouse", creator: "IcEDCave", points: 150, ID: 8975744}

];

// seřazení podle difficulty
levels.sort((a, b) => b.points - a.points);

const list = document.getElementById("list");

levels.forEach((lvl, index) => {
  const div = document.createElement("div");
  div.className = "level";

  div.innerHTML = `
    <h2>#${index + 1} ${lvl.name}</h2>
    <p>By ${lvl.creator}</p>
    <p>points: ${lvl.points}</p>
    <p>ID: ${lvl.ID}</p>
  `;

  list.appendChild(div);
});