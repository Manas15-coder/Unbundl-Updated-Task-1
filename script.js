document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('button.addToCart');
  const selectedItems = document.getElementById('selectedItems');
  const totalPrice = document.getElementById('totalPrice');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      const quantityInput = event.target.previousElementSibling;
      const itemName = quantityInput.getAttribute('data-name');
      const quantity = parseInt(quantityInput.value);

      if (quantity > 0) {
        let totalItems = getTotalItems(selectedItems);

        if ((totalItems + quantity) <= 8) {
          const listItem = document.createElement('li');
          listItem.textContent = `${itemName} x ${quantity}`;
          selectedItems.appendChild(listItem);

          totalPrice.textContent = calculateTotalPrice(selectedItems);
        } else {
          alert('Total items cannot exceed 8!');
        }
      } else {
        alert('Please select a quantity greater than 0.');
      }
    });
  });

  function getTotalItems(selectedItems) {
    let totalItems = 0;
    selectedItems.childNodes.forEach(function(item) {
      const itemText = item.textContent.split(' x ');
      const itemQuantity = parseInt(itemText[1]);
      totalItems += itemQuantity;
    });
    return totalItems;
  }

  function calculateTotalPrice(selectedItems) {
    let totalPrice = 0;
    selectedItems.childNodes.forEach(function(item) {
      const itemText = item.textContent.split(' x ');
      const itemQuantity = parseInt(itemText[1]);
      totalPrice += itemQuantity * 2;
    });
    return `$${totalPrice}`;
  }
});
