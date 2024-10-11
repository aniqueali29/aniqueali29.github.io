
const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];


const designs = [
  { name: 'Minimalist Contemporary Style', price: 1650 },
  { name: 'Modern Industrial Contemporary Style', price: 660 },
  { name: 'Scandinavian Contemporary Style', price: 1250 },
  { name: 'Mid-Century Modern Contemporary Style', price: 1480 },
  { name: 'High-Tech Contemporary Style', price: 2050 },
  { name: 'Urban Chic Contemporary Style', price: 1880 },
  { name: 'Luxurious Contemporary Style', price: 6000 },
  { name: 'Glamorous Contemporary Style', price: 1520 },
  { name: 'Monochromatic Contemporary Style', price: 2030 },
];

function addToWishlist(index) {
  const design = designs[index];

  if (!wishlist.some(item => item.name === design.name)) {
    wishlist.push({ name: design.name, price: design.price });
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
    alert(`${design.name} has been added to your wishlist!`);
  } else {
    alert(`${design.name} is already in your wishlist.`);
  }

  updateWishlist();
}

function updateWishlist() {
  const wishlistItems = document.getElementById('wishlist-items');
  wishlistItems.innerHTML = ''; 
  let total = 0;

  wishlist.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
      ${item.name}
      <span>
        $${item.price} 
        <button class="btn btn-warning text-light btn-sm ms-2" onclick="removeFromWishlist(${index})">Remove</button>
      </span>
    `;
    wishlistItems.appendChild(listItem);
    total += item.price;
  });


  document.getElementById('wishlist-total').innerText = `$${total.toFixed(2)}`;
}

function removeFromWishlist(index) {
  const design = wishlist[index].name; 
  wishlist.splice(index, 1); 
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

 
  alert(`${design} has been removed from your wishlist.`);

  updateWishlist(); 
}


function openWishlist() {
  const wishlistModal = new bootstrap.Modal(document.getElementById('wishlistModal'));
  wishlistModal.show();
}

document.addEventListener('DOMContentLoaded', updateWishlist);
