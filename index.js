// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
let currentOrder = []; // Array to store ordered items
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

    // Add click event listener for removing items
    orderListItem.addEventListener('click', () => {
        removeFromOrder(itemName);
    });

    orderItemsList.appendChild(orderListItem);

    updateOrderTotal();
}

function removeFromOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    const itemIndex = currentOrder.indexOf(itemName);
    if (itemIndex !== -1) {
        currentOrder.splice(itemIndex, 1); // Remove item from order array

        for (let i = 0; i < orderItemsList.children.length; i++) {
            if (orderItemsList.children[i].textContent === itemName) {
                orderItemsList.removeChild(orderItemsList.children[i]);
                break; // Remove only the first matching item
            }
        }

        updateOrderTotal();
    }
}

function updateOrderTotal() {
    const orderTotalElement = document.getElementById('order-total');
    const totalPrice = currentOrder.length * 50; // Assuming each item costs $50

    orderTotalElement.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
