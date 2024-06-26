//dynamically display date and time in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
document.getElementById('lastModified').textContent += lastModifiedDate;

//small view and large view
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
//make temple cards
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
  {
    templeName: "Portland Oregon",
    location: "Portland, Oregon, USA",
    dedicated: "1989, August, 19",
    area: 80500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-1629-main.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 51921,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 29",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  }
];
//dynamically populate temple cards
function renderTemples(temples) {
  const templeContainer = document.getElementById('temple-container');
  templeContainer.innerHTML = ''; // Clear existing content before apending new filtered temple cards

  temples.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
  
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
  
    const title = document.createElement('h2');
    title.textContent = temple.templeName;
  
    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;
  
    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
  
    templeContainer.appendChild(card);
  });
    //edit the width and height of temple images that I add
  const images = document.querySelectorAll('#temple-container img');
  const lastThreeImages = Array.from(images).slice(-3);

  lastThreeImages.forEach(img => {
      img.style.width = '150px'; 
      img.style.height = '100px'; 
  });
}
  //filter temples
  function filterOldTemples() {
    return temples.filter(temple => {
      const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
      return dedicatedYear < 1900;
    });
  }
  
  function filterNewTemples() {
    return temples.filter(temple => {
      const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
      return dedicatedYear >= 2000;
    });
  }
  
  function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
  }
  
  function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
  }
  function displayAllTemples() {
    return temples;
  }
  //integrate filter function into nav menu
  document.addEventListener('DOMContentLoaded', () => {
      // Initially display all temples
    renderTemples(displayAllTemples());
    document.getElementById('home').addEventListener('click', (e) => {
      e.preventDefault();//cannot let <a> link reload by default
      renderTemples(displayAllTemples());
    });
  
    document.getElementById('old').addEventListener('click', (e) => {
      e.preventDefault();//cannot let <a>  link reload by default
      renderTemples(filterOldTemples());
    });
  
    document.getElementById('new').addEventListener('click', (e) => {
      e.preventDefault();//cannot let <a>  link reload by default
      renderTemples(filterNewTemples());
    });
  
    document.getElementById('large').addEventListener('click', (e) => {
      e.preventDefault();//cannot let<a>  link reload by default
      renderTemples(filterLargeTemples());
    });
  
    document.getElementById('small').addEventListener('click', (e) => {
      e.preventDefault();//cannot let <a>  link reload by default
      renderTemples(filterSmallTemples());
    });
  });