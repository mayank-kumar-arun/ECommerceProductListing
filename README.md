📦 E-Commerce Product Listing Page (React + Redux Toolkit + Tailwind + Virtualized Grid)

A fully responsive e-commerce product listing page built with React, Redux Toolkit, Tailwind CSS, and react-virtualized for ultra-smooth virtual scrolling.
Features include filtering, sorting, favorites with localStorage persistence, and dynamic categories from API.

🚀 Live Features
✅ 1. Product Listing (Grid View)

Fetches products from:
https://dummyjson.com/products

Displays product image, title, price, category, & rating

Fully responsive (1, 2, or 4 columns based on screen size)

✅ 2. Dynamic Filters

Filter by Category (extracted from products; no hardcoding)

Filter by Rating

Apply filters

Clear all filters (resets filters & restores original list)

Mobile-optimized layout

Row 1: Category + Rating

Row 2: Apply + Clear

Desktop layout remains in one line

✅ 3. Sorting

Sort products by Price: Low → High / High → Low

✅ 4. Favorites Functionality

Click heart icon to add/remove item from favorites

Favorite products are visually highlighted

Red border

Glow shadow

Animated heart icon

Favorites saved to localStorage

Persists after page refresh

Syncs with Redux

✅ 5. Infinite Virtual Scrolling (Client-Side)

Using react-virtualized:

Super-fast scroll performance

Only visible items rendered

Supports thousands of products smoothly

Fully responsive with AutoSizer

Works perfectly with filters + sorting + favorites



Steps to Start the Project .

1. Clone the repository or download the code
2. Run npm install
3. Run npm run dev 