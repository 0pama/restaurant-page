import './menu.css'
// Menu data 
const menuData = {
    "breakfast_options": [
      {
        "name": "Sabaayad Topped with Hazelnut Spread",
        "price": "£3",
        "description": "Somali style flatbread topped with hazelnut spread."
      },
      {
        "name": "Sabaayad Topped with Clotted Cream and Honey",
        "price": "£4",
        "description": "Somali styled flatbread with clotted cream and honey."
      },
      {
        "name": "Beef Suqaar",
        "price": "£13",
        "description": "Diced beef cooked with onions, garlic, green peppers, and coriander with Xawash spices."
      },
      {
        "name": "Chicken Suqaar",
        "price": "£13",
        "description": "Chicken cubes cooked with onion, garlic, green peppers, and coriander. Served with a choice of sabaayad, Somali rice, soor, or pasta."
      },
      {
        "name": "Kidneys",
        "price": "£13",
        "description": "Diced lamb kidney cooked with onions, garlic, and green peppers."
      },
      {
        "name": "Ful (Fava Beans) with Shakshuka",
        "price": "£13",
        "description": "Mashed fava beans cooked with onions and garlic served with Shakshuka (eggs).",
        "vegan": true
      }
    ],
    "breakfast_combos": [
      {
        "name": "Full Somali Breakfast",
        "price": "£15",
        "description": "Includes Shakshuka (eggs), Suqaar, Kidneys, Ful (Fava beans), and Hummus."
      },
      {
        "name": "Platter for 2 Full Somali Breakfast",
        "price": "£22",
        "description": "Includes Shakshuka, Suqaar, Kidneys, Ful (Fava Beans), and Hummus for two people."
      }
    ]
  };
  
  // Function to create a menu item element
  function createMenuItem(name, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
  
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    menuItem.appendChild(itemName);
  
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ${price}`;
    menuItem.appendChild(itemPrice);
  
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    menuItem.appendChild(itemDescription);
  
    return menuItem;
  }
  
  // Function to create the menu
  function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu';
  
    menuData.breakfast_options.forEach(x => {
      const menuItem = createMenuItem(x.name, x.price, x.description);
      menuContainer.appendChild(menuItem);
    });
  
    const combosHeader = document.createElement('h2');
    combosHeader.textContent = 'Breakfast Combos';
    combosHeader.className = 'combos'
    menuContainer.appendChild(combosHeader);
  
    menuData.breakfast_combos.forEach(combo => {
      const menuItem = createMenuItem(combo.name, combo.price, combo.description);
      menuContainer.appendChild(menuItem);
    });
  
    return menuContainer;
  }
  
  // Render the menu on the page
  export default function renderMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content
    const menu = createMenu();
    content.appendChild(menu);
  }
  

  