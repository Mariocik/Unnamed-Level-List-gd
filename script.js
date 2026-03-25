const levels = [
  {
    name: "Bloodbath",
    creator: "Riot",
    points: 151,
    ID: 86696764,
    image: "images/bloodbath.png"
  },
  {
    name: "Acheron",
    creator: "Zoink",
    points: 149,
    ID: 68940983,
    image: "images/acheron.png"
  },
  {
    name: "Slaughterhouse",
    creator: "IcEDCave",
    points: 150,
    ID: 8975744,
    image: "images/slaughterhouse.png"
  }
];

levels.sort((a, b) => b.points - a.points);

const list = document.getElementById("list");

levels.forEach((lvl, index) => {
  const div = document.createElement("div");
  div.className = "level";

  div.innerHTML = `
    <img src="${lvl.image}">
    <div>
      <h2>#${index + 1} ${lvl.name}</h2>
      <p>By ${lvl.creator}</p>
      <p>Points: ${lvl.points}</p>
      <p>ID: ${lvl.ID}</p>
    </div>
  `;

  list.appendChild(div);
});
