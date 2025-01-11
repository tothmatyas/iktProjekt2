let totalWattage = 0;

function addWattage(watts) {
    totalWattage += watts;
    document.getElementById('wattage').textContent = totalWattage;
}