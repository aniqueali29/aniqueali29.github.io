document.addEventListener("DOMContentLoaded", function () {
  const wishlistModal = document.getElementById("wishlistModal");
  const wishlistItems = document.getElementById("wishlist-items");
  const wishlistTotal = document.getElementById("wishlist-total");


  document.querySelectorAll(".add-to-wishlist").forEach(button => {
    button.addEventListener("click", function () {
      const product = {
        name: this.dataset.name,
        price: parseFloat(this.dataset.price),
        img: this.dataset.img
      };

      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      updateWishlistUI();


      alert(`${product.name} has been added to your wishlist!`);
    });
  });


  function updateWishlistUI() {
    wishlistItems.innerHTML = "";
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let total = 0;

    wishlist.forEach((item, index) => {
      total += item.price;
      let li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      li.innerHTML = `
          <span>${item.name}</span>
          <span>$${item.price.toFixed(2)}</span>
          <button class="btn btn-warning btn-sm remove-from-wishlist text-light" data-index="${index}">Remove</button>
        `;
      wishlistItems.appendChild(li);
    });

    wishlistTotal.textContent = total.toFixed(2);

    document.querySelectorAll(".remove-from-wishlist").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.dataset.index;
        removeFromWishlist(index);
      });
    });
  }

 
  function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const removedItem = wishlist[index];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistUI();

 
    alert(`${removedItem.name} has been removed from your wishlist.`);
  }

  
  updateWishlistUI();
});
