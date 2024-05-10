
  // Topping prices
  const toppingPrices = {
    avocado: 1,
    broccoli: 1,
    onions: 1,
    zucchini: 1,
    lobster: 2,
    oyster: 2,
    salmon: 2,
    tuna: 2,
    bacon: 3,
    duck: 3,
    ham: 3,
    sausage: 3
  };

  // Function to calculate and display the price
  function calculatePrice() {
    // Get selected pizza type
    const pizzaType = document.querySelector('input[name="pizzaType"]:checked').value;

    // Get selected size
    const size = document.querySelector('input[name="size"]:checked').value;

    // Get selected toppings
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);

    // Calculate price based on pizza type, size, and toppings
    let price;
    if (pizzaType === 'pizza') {
      // Base price for pizza
      price = 8;

      // Additional cost for size
      if (size === 'small') {
        price -= 1;
      } else if (size === 'large') {
        price += 2;
      }

      // Additional cost for each topping
      price += toppings.reduce((total, topping) => total + toppingPrices[topping], 0);

      // Disable toppings not allowed for pizza
      disableToppingsForPizza();
    } else if (pizzaType === "chickencrust") {
      // Base price for chickencrust
      price = 10;

      // Additional cost for size
      if (size === "small") {
        price -= 1;
      } else if (size === "large") {
        price += 2;
      }

      // Additional cost for each topping
      price += toppings.reduce((total, topping) => total + toppingPrices[topping], 0);
      disableToppingsForchickencrust();
    } else if (pizzaType === "hawaiian") {
      // Base price for hawaiian
      price = 12;

      // Additional cost for size
      if (size === "small") {
        price -= 1;
      } else if (size === "large") {
        price += 2;
      }

      // Additional cost for each topping
      price += toppings.reduce((total, topping) => total + toppingPrices[topping], 0);
      disableToppingsForHawaiian();
    }

    // Display price
    document.getElementById('priceDisplay').innerText = `Total Price: $${price.toFixed(2)}`;
  }

  // Function to disable toppings not allowed for pizza
  function disableToppingsForPizza() {
    const allowedToppingsForPizza = ['avocado', 'broccoli', 'onions', 'zucchini', 'tuna', 'ham'];
    const toppings = document.querySelectorAll('input[name="topping"]');
    toppings.forEach(topping => {
      if (!allowedToppingsForPizza.includes(topping.value.toLowerCase())) {
        topping.disabled = true;
      } else {
        topping.disabled = false;
      }
    });
  }

  // Function to disable toppings not allowed for chickencrust
  function disableToppingsForchickencrust() {
    const allowedToppingsForchickencrust = ["broccoli", "onions", "zucchini", "lobster", "oyster", "salmon", "bacon", "ham"];
    const toppings = document.querySelectorAll('input[name="topping"]');
    toppings.forEach((topping) => {
      if (!allowedToppingsForchickencrust.includes(topping.value.toLowerCase())) {
        topping.disabled = true;
      } else {
        topping.disabled = false;
      }
    });
  }

  // Function to disable toppings not allowed for hawaiian
  function disableToppingsForHawaiian() {
    const allowedToppingsForHawaiian = ['broccoli', 'onions', 'zucchini', 'tuna', 'bacon', 'duck', 'ham', 'sausage'];
    const toppings = document.querySelectorAll('input[name="topping"]');
    toppings.forEach(topping => {
      if (!allowedToppingsForHawaiian.includes(topping.value.toLowerCase())) {
        topping.disabled = true;
      } else {
        topping.disabled = false;
      }
    });
  }

  // Attach event listeners to update price when options change
  document.querySelectorAll('input[name="pizzaType"], input[name="size"], input[name="topping"]').forEach(element => {
    element.addEventListener('change', calculatePrice);
  });

  // Initially calculate and display price
  calculatePrice();