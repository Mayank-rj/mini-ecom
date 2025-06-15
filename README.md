# Mini E-Commerce Website

This is a mini e-commerce website developed as an assessment task.

## Tech Stack

- **React.js**
- **React Router**
- **Fake Store API**
- **Axios**
- **React Redux** 
- **Tailwind CSS**
- **React Icons**

## Features

Developed a simple fully responsive 2-page mini e-commerce website using React and using data from a mock API (https://fakestoreapi.com/).

### 1 Home Page

- Navbar with search functionality.
- Product Cards displaying list of products.
- Category Buttons to filter products by category.
- Footer component.
- Clicking on product image or name navigates to the product details page.

### 2 Single Product Page

- Displays information of a selected product.
- Navbar and Footer are also present.
- Fetches product details dynamically based on product ID.

## API Endpoints Used

- Fetch All Products  `https://fakestoreapi.com/products`
- Fetch Categories  `https://fakestoreapi.com/products/categories` 
- Fetch Single Product Details  `https://fakestoreapi.com/products/{id}` 

## Functionality Details

- **Category Filter:**  
  By clicking any category button, products are filtered based on selected category.

- **Search Filter:**  
  As the user types in the search bar, products are filtered in real-time based on the entered text.

- **Navigation:**  
  Clicking on any product image or product name will navigate to the detailed product page.


## Installation & Run Locally

Clone the repository:

git clone https://github.com/Mayank-rj/mini-ecom.git

cd mini-ecom

npm install

npm run dev