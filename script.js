// Service Data
const services = [
    { id: 1, name: 'Dry Cleaning', price: 200 },
    { id: 2, name: 'Wash & Fold', price: 100 },
    { id: 3, name: 'Ironing', price: 30 },
    { id: 4, name: 'Stain Removal', price: 150 },
    { id: 5, name: 'Leather Care', price: 500 },
    { id: 6, name: 'Wedding Dress', price: 1500 }
];

// State
let cart = [];

// DOM Elements
const serviceListEl = document.getElementById('service-list');
const cartItemsEl = document.getElementById('cart-items');
const totalAmountEl = document.getElementById('total-amount');
const bookingForm = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');

// Initialize
function init() {
    renderServices();
}

// Render Services List
function renderServices() {
    serviceListEl.innerHTML = services.map(service => `
        <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
            <div>
                <h4 class="font-bold text-gray-800">${service.name}</h4>
                <p class="text-gray-500">₹${service.price}</p>
            </div>
            <div class="space-x-2">
                <button onclick="addToCart(${service.id})" class="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition">Add</button>
                <button onclick="removeFromCart(${service.id})" class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition">Remove</button>
            </div>
        </div>
    `).join('');
}

// Add Item to Cart
window.addToCart = function(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (service) {
        cart.push(service);
        renderCart();
    }
};

// Remove Item from Cart
window.removeFromCart = function(serviceId) {
    const index = cart.findIndex(item => item.id === serviceId);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
    }
};

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <tr>
                <td colspan="4" class="py-4 text-center text-gray-500">No items added yet.</td>
            </tr>
        `;
    } else {
        cartItemsEl.innerHTML = cart.map((item, index) => `
            <tr class="border-b last:border-0 border-gray-100">
                <td class="py-2 text-gray-500">${index + 1}</td>
                <td class="py-2 font-medium">${item.name}</td>
                <td class="py-2 text-right">₹${item.price}</td>
                <td class="py-2 text-right">
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm">
                        &times;
                    </button> // This removes one instance, logic matches requirements to have add/remove buttons.
                </td>
            </tr>
        `).join('');
    }
    updateTotal();
}

// Update Total Amount
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmountEl.textContent = `₹${total}`;
}

// Handle Form Submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert('Please add at least one service to your cart.');
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
        to_name: 'Admin', // Or user's name if you want to send confirmation to user
        from_name: name,
        user_email: email,
        user_phone: phone,
        services_list: cart.map(item => `${item.name} (₹${item.price})`).join(', '),
        total_amount: `₹${total}`,
    };

    // Send email using EmailJS
    // NOTE: This requires a defined service and template in EmailJS dashboard.
    // Since we don't have real keys, we will simulate success or attempt it if keys were present.
    
    // For demonstration, we'll simulate a success message and log the payload.
    console.log('Sending Order:', templateParams);
    
    // In a real scenario:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    //     .then(function() { ... }, function(error) { ... });

    // Simulate success for user feedback
    setTimeout(() => {
        formMessage.textContent = 'Thank you For Booking the Service. We will get back to you soon!';
        formMessage.classList.remove('hidden');
        bookingForm.reset();
        cart = [];
        renderCart();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }, 1000);
});

// Run Init
init();
