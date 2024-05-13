// dynamic date&time
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
document.getElementById('lastModified').textContent += lastModifiedDate;

// Define variables for temperature and wind speed
const temperature = 79; //F
const windSpeed = 8; //mph

function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 50 && windSpeed > 3) ? Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)) : 'N/A';
}

function displayWindChill() {
    const windChill = calculateWindChill(temperature, windSpeed);
    const windChillElement = document.getElementById('windchill');
    if (windChillElement) {
        windChillElement.textContent = `Wind Chill: ${windChill}°F`;
    }
}
window.onload = displayWindChill;
