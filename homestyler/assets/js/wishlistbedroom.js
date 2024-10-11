const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; 


const designs = [
  { name: 'Urban Chic  Bedroom', price: 1550 },
  { name: 'Minimalist Monochrome Bedroom', price: 1900 },
  { name: 'Glass and Steel Oasis Bedroom', price: 1750 },
  { name: 'Cozy Industrial Loft  Bedroom', price: 1350 },
  { name: 'Scandinavian Simplicity  Bedroom', price: 1850 },
  { name: 'Nature-Inspired Haven  Bedroom', price: 1550 },
  { name: 'Mid-Century Modern Bedroom', price: 2400 },
  { name: 'Bohemian Eclectic Bedroom', price: 1550 },
  { name: 'Elegant Minimalist Bedroom', price: 2050 },
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
