const URL = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/157";

(async () => {
  const response = await fetch(URL);
  if (response && response.ok) {
    const data = await response.json();

    const last_updated = data.location.last_updated;
    document.getElementById("last_updated").textContent = last_updated;

    const confirmed = data.location.latest.confirmed;
    document.getElementById("confirmed__number").textContent = confirmed;

    const deaths = data.location.latest.deaths;
    document.getElementById("deaths__number").textContent = deaths;

    const recovered = data.location.latest.recovered;
    document.getElementById("recovered__number").textContent = recovered;
  }
})();
