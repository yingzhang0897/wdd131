// dynamic date&time
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const lastModified = new Date(document.lastModified);
const lastModifiedDate = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;
document.getElementById('lastModified').textContent += lastModifiedDate;

//populate product name in <select>
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
    }
];
const productSelect = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
// style star rating
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star-rating input');

  stars.forEach(star => {
      star.addEventListener('change', () => {
          updateStars(star);
      });
  });

  function updateStars(star) {
      const value = parseInt(star.value, 10);
      stars.forEach(s => {
          if (parseInt(s.value, 10) <= value) {
              s.previousElementSibling.style.color = 'gold';
          } else {
              s.previousElementSibling.style.color = '#ccc';
          }
      });
  }
});


  