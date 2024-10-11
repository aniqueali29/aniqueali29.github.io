const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; 


const designs = [
  { name: 'Urban Chic Living Room', price: 1450 },
  { name: 'Minimalist Monochrome Living Room', price: 1800 },
  { name: 'Glass and Steel Oasis Living Room', price: 1950 },
  { name: 'Cozy Industrial Loft Living Room', price: 2000 },
  { name: 'Scandinavian Simplicity Living Room', price: 1650 },
  { name: 'Nature-Inspired Haven Living Room', price: 1450 },
  { name: 'Mid-Century Modern Twist Living Room', price: 1850 },
  { name: 'Bohemian Eclectic Retreat Living Room', price: 1600 },
  { name: 'Elegant Minimalist Living Room', price: 2450 },
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
