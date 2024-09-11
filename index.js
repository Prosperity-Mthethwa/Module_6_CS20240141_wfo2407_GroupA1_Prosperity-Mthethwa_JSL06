// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        const categoryElement = document.createElement('div');
        categoryElement.innerHTML = `<h3>${category}</h3>`;

        const itemListElement = document.createElement('ul');

        const items = menu[category];

        items.forEach(item => {
            const listItemElement = document.createElement('li');
            listItemElement.textContent = item;

            // Add click event listener for adding items
            listItemElement.addEventListener('click', () => {
                addToOrder(item);
            });

            itemListElement.appendChild(listItemElement);
        });

        categoryElement.appendChild(itemListElement);
        menuContainer.appendChild(categoryElement);
    }

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    currentOrder.push(itemName); // Add item to order array

    const orderListItem = document.createElement('li');
    orderListItem.textContent = itemName;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
