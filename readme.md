# E-commerce Static Website

This project is a static e-commerce website built to showcase products and provide a simple shopping experience. It is designed for learning and demonstration purposes.

## Features

- Responsive design for desktop and mobile
- Product listing pages
- Product detail pages
- Shopping cart functionality (client-side)
- Simple checkout flow
- Static assets (HTML, CSS, JavaScript, images)

## Pages and Functions

### Home Page (`index.html`)
- Displays featured products and site navigation.
- Links to product listing and cart pages.

![Home Page Screenshot](./img/website%20pages/home.png)

*Above: Example of the home page layout with featured products and navigation.*

### Product Listing Page (`products.html`)
- Shows all available products.
- Allows users to view product details.

![Product listing Screenshot](./img/website%20pages/product%20listing%20page.png)

*Above: Example of the product listing page layout with featured products and navigation.*

### Product Detail Page (`product-detail.html`)
- Displays detailed information about a selected product.
- Option to add the product to the shopping cart.

![Product Details Page Screenshot](./img/website%20pages/single%20product.png)

*Above: Example of the product details page layout with featured products and navigation.*

### Shopping Cart Page (`cart.html`)
- Lists products added to the cart.
- Allows users to update quantities or remove items.
- Proceeds to checkout.

![Shopping Cart Page Screenshot](./img/website%20pages/home.png)

*Above: Example of the shopping cart page layout with featured products and navigation.*

### Checkout Page (`checkout.html`)
- Collects user information for order processing.
- Displays order summary.

![Check Out Page Screenshot](./img/website%20pages/home.png)

*Above: Example of the check-out page layout with featured products and navigation.*

### JavaScript Functions
- `addToCart(productId)`: Adds a product to the cart.
- `getCartItems()`: Returns an array of products currently in the shopping cart.
- `removeFromCart(productId)`: Removes a product from the cart.
- `updateCartQuantity(productId, quantity)`: Updates product quantity in the cart.
- `calculateTotal()`: Calculates the total price of items in the cart.
- `checkout()`: Handles the checkout process.

## Getting Started

1. Clone this repository.
2. Open `index.html` in your browser.
3. Explore the product pages and cart features.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## Credits

This project was created with the help of a YouTube tutorial.  
Special thanks to the content creator for their guidance.

## License

This project is for educational purposes only.
