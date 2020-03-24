const URL = "https://corona.lmao.ninja/countries/france";

(async () => {
  const response = await fetch(URL);
  if (response && response.ok) {
    const data = await response.json();

    const confirmed = data.cases;
    document.getElementById("confirmed__number").textContent = confirmed;

    const deaths = data.deaths;
    document.getElementById("deaths__number").textContent = deaths;

    const recovered = data.recovered;
    document.getElementById("recovered__number").textContent = recovered;
  }
})();
