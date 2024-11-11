
---
# Plantsy - Phase 2 Code Challenge

Welcome to **Plantsy**! This is the admin interface for a plant store where users can view, add, update, and manage a collection of plants.

## Demo

Below is a demonstration of how the app should work:

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

---

## Project Overview

Plantsy is a React application with backend API integration that allows users to manage plant inventory. Users can:
- View a list of plants.
- Add new plants to the collection.
- Mark plants as "sold out."
- Filter plants by name in a search bar.

Advanced functionality includes updating the price of a plant and deleting plants from the inventory.

---

## Setup Instructions

To set up and run the project locally, follow these steps:

1. **Install dependencies**: Run `npm install` in your terminal to install all necessary packages.
2. **Start the backend server**: Run `npm run server`. The backend will be running on port `6001`.
3. **Start the frontend**: In a new terminal, run `npm start` to start the React application.

### Verifying Backend Setup

Before proceeding, ensure the backend is running by visiting [http://localhost:6001/plants](http://localhost:6001/plants) in your browser. You should see a JSON response with plant data.

---

## Usage Instructions

### Core Features

1. **View All Plants**: When the app starts, it automatically fetches and displays a list of all plants from the backend.

2. **Add a New Plant**: 
   - Use the form provided to add a new plant by entering its name, image URL, and price.
   - Click "Add Plant" to submit. The new plant will appear in the list without needing a page refresh.

3. **Mark a Plant as Sold Out**:
   - Each plant card has a button to toggle its "In Stock" or "Sold Out" status.

4. **Search for Plants**:
   - Use the search bar to filter plants by name. The displayed plant list will update in real-time as you type.

### Advanced Features

1. **Update Plant Price**:
   - Click on the price of a plant to edit it.
   - Enter the new price and submit to update it in the backend. The new price will persist on page refresh.

2. **Delete a Plant**:
   - Each plant card has a delete button to remove the plant from the inventory. The deletion persists on refresh.

---

## API Documentation

### Base URL

The backend API runs on `http://localhost:6001`.

### Core Endpoints

#### GET `/plants`

Fetches all plants.

**Example Response**:
```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Adds a new plant to the backend.

- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "string",
    "image": "string",
    "price": number
  }
  ```
- **Example Response**:
  ```json
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  }
  ```

### Advanced Endpoints

#### PATCH `/plants/:id`

Updates the price of a specific plant.

- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "price": number
  }
  ```
- **Example Response**:
  ```json
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 16.99
  }
  ```

#### DELETE `/plants/:id`

Deletes a plant from the backend.

- **Example Response**:
  ```json
  {}
  ```

---

## Error Handling

The application includes error handling for backend requests:
- Users will see an error message if a request fails (e.g., when the server is down).
- The app will continue to function smoothly by logging errors to the console and displaying alerts where necessary.

---

## Deployment

To deploy the app:
1. Choose a hosting platform like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Deploy both the backend (using services like Heroku or Railway) and frontend (on Netlify or Vercel).
3. Update the backend URL in your frontend code if it changes upon deployment.
4. Include the live link below once deployed.

### Live Demo
https://react-hooks-cc-plantshopem.netlify.app/

---

## Additional Notes

- **Dependencies**: Ensure all dependencies are installed, particularly React and any packages required for the backend.
- **File Structure**: The application follows a modular structure for components, organized for maintainability.

---
