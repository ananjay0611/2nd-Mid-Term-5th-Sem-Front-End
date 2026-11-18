// Array of product objects
const products = [
    {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799
    },
    {
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1999
    },
    {
        name: "USB Cable",
        category: "Electronics",
        price: 199
    },
    {
        name: "Notebook Pack",
        category: "Stationery",
        price: 249
    },
    {
        name: "Gel Pen Set",
        category: "Stationery",
        price: 99
    },
    {
        name: "Running Shoes",
        category: "Fashion",
        price: 2499
    },
    {
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599
    },
    {
        name: "Backpack",
        category: "Fashion",
        price: 1299
    }
];

const search = document.getElementById("search");
const category = document.getElementById("category");
const productList = document.getElementById("productList");
const count = document.getElementById("count");

// Display products
function displayProducts() {

    const searchText = search.value.toLowerCase();
    const selectedCategory = category.value;

    // Filter products
    const filteredProducts = products.filter(product => {

        const nameMatch = product.name
            .toLowerCase()
            .includes(searchText);

        const categoryMatch = 
            selectedCategory === "All" || 
            product.category === selectedCategory;

        return nameMatch && categoryMatch;
    });

    // Update count
    count.innerText = filteredProducts.length > 0
        ? `Showing ${filteredProducts.length} of ${products.length} products`
        : "No products found.";

    // Display cards
    productList.innerHTML = filteredProducts.map(product => `
        <div class="card">
            <h3>${product.name}</h3>
            <span class="category">${product.category}</span>
            <p class="price">Rs. ${product.price}</p>
        </div>
    `).join("");

}

// Input event for search
search.addEventListener("input", displayProducts);

// Change event for category
category.addEventListener("change", displayProducts);

// Initial display
displayProducts();