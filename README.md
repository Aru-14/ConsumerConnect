# 🛒 ConsumerConnect: Modern E-commerce Platform

**ConsumerConnect** is a robust Single Page Application (SPA) designed to demonstrate modern React development practices, including state management with Context API, data persistence via LocalStorage, and role-based authorization for administrative features.

## 🚀 Features

### Core Functionality

  * **SPA Navigation:** Seamless client-side routing is handled using `react-router-dom`, featuring dedicated routes for Login, Products, Cart, Checkout, and the Admin Dashboard.
  * **User Authentication (Mock):** Implements mock login functionality with persistent data and role-based access control (Admin or User).
  * **Data Persistence:** Despite not using an external database, key application data (user session/login state and cart contents) persists across browser sessions using **localStorage**.

### State Management (React Context API)

The application utilizes the React Context API to manage global state, ensuring clean separation of concerns:

  * **`ProductContext`**: Manages the master list of all available products.
  * **`CartContext`**: Handles all cart operations, including adding items, removing items, updating quantities, and calculating the total price.
  * **`AuthContext`**: Manages the current user session, login/logout functions, and role status (Admin/User).

### User Experience (User Features)

  * **Intuitive Shopping:** Users can easily browse products and utilize name-based and category-based filtering for efficient product discovery.
  * **Cart Management:** Simple and clear functionality to add products to the cart, modify quantities, and remove items.
  * **Mock Checkout:** A streamlined, mock checkout process.

### Administrative Control (Admin Features)

Access to the Admin Dashboard is strictly role-based (via `AuthContext`):

  * **Dynamic Product Management (CRUD):** Administrators can fully manage the product inventory by performing **C**reate, **R**ead, **E**dit, and **D**elete operations dynamically.

## ⚙️ Technology Stack

  * **Frontend:** React (SPA)
  * **Routing:** `react-router-dom`
  * **State Management:** React Context API and `useReducer` (recommended for complex state logic like the Cart)
  * **Data Persistence:** Browser `localStorage`
  * **Styling/UI:** Tailwind CSS (Highly recommended for rapid, utility-first styling)

## 🛠️ Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Aru-14/ConsumerConnect
    cd ConsumerConnect
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn run dev
    ```

    The application should now be running at `http://localhost:5173`.

## 🗺️ Routes

| Path | Component | Required Role | Description |
| :--- | :--- | :--- | :--- |
| `/login` | `LoginPage` | Public | Handles user authentication. |
| `/` | `ProductsPage` | Public | Main shopping area with filtering. |
| `/cart` | `CartPage` | User/Admin | View, manage, and calculate cart contents. |
| `/checkout` | `CheckoutPage` | User/Admin | Mock checkout process. |
| `/admin` | `AdminDashboard` | Admin Only | Product CRUD interface. |
| `/product/edit/:id` | `ProductEditPage` | Admin Only | Interface to edit product details. |

## 🧠 Key Development Concepts

The project showcases best practices in React development:

  * **Hooks Usage:** Strategic use of `useState` for local component state and `useEffect` for managing side effects, particularly syncing state with `localStorage`.
  * **Props-Driven Design:** Components are designed to be reusable and rely on clean property passing for data flow, minimizing prop drilling through Context.
  * **LocalStorage Syncing:** The `CartContext` and `AuthContext` utilize `useEffect` to read data from and write data to `localStorage` on initial load and state changes, ensuring data continuity.

[Check out the working](https://www.linkedin.com/posts/arunima-paunikar_just-built-a-react-based-frontend-prototype-activity-7353082961296060417-S_lO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVAoLwB4TsHeMyyZJcyeoRwfyry9ndycrE)
