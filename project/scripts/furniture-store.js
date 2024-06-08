// Get dynamic time in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
document.getElementById('lastModified').textContent += lastModifiedDate;

// Create cards for the products page
const images = [
  { src: "images/living-room.JPG", alt: "Living Room Sets" },
  { src: "images/dining-room.JPG", alt: "Dining Room Sets" },
  { src: "images/bedroom.jpg", alt: "Bedroom Sets" },
  { src: "images/office.jpg", alt: "Office Sets" }
];

function createFurnitureCards(images) {
  const productsContainer = document.getElementById('products-container');
  
  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const cardImage = document.createElement('img');
    cardImage.src = image.src;
    cardImage.alt = image.alt;
    cardImage.style.width = '400px';
    cardImage.style.height = 'auto';
    cardImage.style.maxHeight = '250px';

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = image.alt;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    productsContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createFurnitureCards(images);
});

// Create hamButton for small view of products page
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
} else {
  console.warn('Menu button or navigation not found!');
}

// Create service cards for services page
document.addEventListener('DOMContentLoaded', () => {
  const services = [
    { service: "Home Delivery", videoURL: "https://www.youtube.com/embed/iOybZKhpSYA", description:"We strive to make the delivery at your convenience and satisfaction." },
    { service: "Furniture Assembly", videoURL: "https://www.youtube.com/embed/Q1s3i8P-okQ", description:"Our assembling service strives to make your day." },
    { service: "Interior Design Consultation", videoURL: "https://www.youtube.com/embed/lFLbctakvlk", description:"Our consultation service is customized and sweet." },
    { service: "Furniture Repair", videoURL: "https://www.youtube.com/embed/KV0htexQZLw",description:"Our repair service is reliable and never expires." }
  ];

  const servicesContainer = document.getElementById('services-container');

  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';

    card.innerHTML = `
      <h3>${service.service}</h3>
      <div class="video-wrapper">
        <iframe src="${service.videoURL}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <p>${service.description}</p>
    `;
    servicesContainer.appendChild(card);
  });
});
