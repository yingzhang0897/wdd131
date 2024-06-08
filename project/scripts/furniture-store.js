//get dynamic time in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
document.getElementById('lastModified').textContent += lastModifiedDate;

//create cards for the products page
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

//create hamButton for small view of products page
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//create cards for the services page
document.addEventListener('DOMContentLoaded', () => {
  const services = [
    { service: "Home Delivery", videoURL: "https://drive.google.com/file/d/1_GcWHTTNpICfwv0rlCA27_OHRwaW7voA/view?usp=sharing", description:"We strive to make the delivery at your convenience and satisfaction." },
    { service: "Furniture Assembly", videoURL: "https://drive.google.com/file/d/1tnPsV2SNw0evj93vC3qxxXYA1wzwXZCb/view?usp=sharing", description:"Our assembling service strives to make your day." },
    { service: "Interior Design Consultation", videoURL: "https://drive.google.com/file/d/1NoSh_qehA0j4p7sCKJlOdT0FgOoiBw8O/view?usp=sharing", description:"Our consultation service is customized and sweet." },
    { service: "Furniture Repair", videoURL: "https://drive.google.com/file/d/16Sz_A7gjjT4vIPaPoTtvniEwu-pDvgra/view?usp=sharing",description:"Our repair service is reliable and never expires." }
  ];

  const servicesContainer = document.getElementById('services-container');

  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const videoEmbedURL = service.videoURL.replace('/view?usp=sharing', '/preview');

    card.innerHTML = `
      <h3>${service.service}</h3>
      <div class="video-wrapper">
        <iframe src="${videoEmbedURL}" allow="autoplay"></iframe>
      </div>
      <p>${service.description}</p>
    `;
    servicesContainer.appendChild(card);
  });
});
