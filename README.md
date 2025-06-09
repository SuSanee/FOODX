# 🍽️ FOODX - Your Food Ordering App

A responsive and modern food ordering application built with React and Tailwind CSS, offering a seamless user experience for browsing restaurants and ordering food.

## See Website
**NOTE** : Download the Cors bypass extension and enable it on your chrome browser before starting the project.

link for CORS extension - [Cors Extension](https://chromewebstore.google.com/detail/lhobafahddgcelffkeicbaginigeejlf?utm_source=item-share-cp)

After enabling the extension visit the website from the link given below.

> ⚙️ Live Preview: [Visit FOODX](https://foodx-kappa.vercel.app/)

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For declarative routing in React applications.
- **Redux Toolkit**: For efficient state management.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development and responsive design.
- **Parcel**: A blazing fast, zero configuration web application bundler.
- **React Icons**: For easily including popular icons in your project.

## 🚀 Features

- **Restaurant Listing**: Browse a list of available restaurants.
- **Search Functionality**: Easily search for your favorite restaurants.
- **Top-Rated Restaurants**: Filter and view only the top-rated restaurants.
- **Restaurant Menu**: View the detailed menu for each restaurant with category-wise listings.
- **Cart Management**: Add items to your cart, view cart contents, and manage quantities.

https://github.com/user-attachments/assets/3f93b7a0-2120-418e-9ab7-8e304e9ee8d3

https://github.com/user-attachments/assets/3f93b7a0-2120-418e-9ab7-8e304e9ee8d3

## 🖥️Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SuSanee/FOODX.git
    cd FOODX
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    **or**
    
    ```bash
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
    **or**

    ```bash
    yarn start
    ```
    This will open the application in your browser at `http://localhost:1234`.

## Usage

-   **Browse Restaurants**: The main page displays a list of restaurants.
-   **Search**: Use the search bar to find specific restaurants by name.
-   **Top Rated**: Click the "Top Rated" button to filter restaurants with an average rating above 4.
-   **View Menu**: Click on any restaurant card to view its detailed menu.
-   **Add to Cart**: From the menu page, click "ADD" to add items to your cart.
-   **View Cart**: Click the cart icon in the header to see your selected items.

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── componets/
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── CartItemList.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── img/
│   │   └── Foodx.png
│   ├── utilies/
│   │   ├── cartSlice.js
│   │   ├── constants.js
│   │   └── useOnlineStatus.js
│   ├── App.js
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── .postcssrc
├── notes.txt
└── README.md
```

## 🤝 Contribution

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
