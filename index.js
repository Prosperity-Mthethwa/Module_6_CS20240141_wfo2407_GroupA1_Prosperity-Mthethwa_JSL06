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
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
