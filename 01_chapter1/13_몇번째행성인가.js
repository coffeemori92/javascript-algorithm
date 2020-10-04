const n = 1;

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

function planetName(n) {
  return planets[n-1];
}

console.log(planetName(n));