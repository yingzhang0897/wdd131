// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the span element with id "currentYear"
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Format the last modified date as a string
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;

// Update the content of the p element with id "lastModified"
document.getElementById('lastModified').textContent += lastModifiedDate;
