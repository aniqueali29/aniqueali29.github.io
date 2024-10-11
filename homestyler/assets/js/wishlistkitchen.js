
const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];


const designs = [
  { name: 'Modern Kitchen', price: 1425 },
  { name: 'Traditional Kitchen', price: 4210 },
  { name: 'Industrial Kitchen', price: 950 },
  { name: 'Minimalist Kitchen', price: 3800 },
  { name: 'Farmhouse Kitchen', price: 1230 },
  { name: 'Contemporary Kitchen', price: 6000 },
  { name: 'Scandinavian Kitchen', price: 1150 },
  { name: 'Rustic Kitchen', price: 1500 },
  { name: 'Mediterranean Kitchen', price: 2300 },
];

function addToWishlist(index) {
  const design = designs[index];

t
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
