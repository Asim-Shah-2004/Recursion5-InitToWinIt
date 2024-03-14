# Travel Smart WebApp

This is a web application designed to assist users in planning their trips, providing relevant information about destinations, weather forecasts, clothing recommendations, emergency contacts, safety tips, food recommendations, and more. The application comprises both frontend and backend components to ensure seamless interaction with users.

## Installation

To run the Travel Smart WebApp locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```
   cd <project_directory>
   ```

3. Install dependencies for both frontend and backend:

   **Frontend:**
   ```
   cd frontend
   yarn install
   ```

   **Backend:**
   ```
   cd backend
   yarn install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Define the necessary environment variables such as database connection string, API keys, etc.

5. Start the backend server:
   ```
   yarn start
   ```

6. Start the frontend development server:
   ```
   yarn start
   ```

7. Access the Travel Smart WebApp by visiting `http://localhost:3000` in your web browser.

## Frontend

### 1. Landing Page

The landing page provides an introduction to the Travel Smart WebApp and prompts users to either log in or register.

### 2. Dashboard

The dashboard is the main interface for users. It features a chatbot interface along with six specific buttons for quick access to various functionalities:

1. **Itinerary**: Plans the itinerary based on the provided start date and end date.
2. **Clothing**: Provides recommendations on what clothing to wear based on the destination and weather forecast.
3. **Climate**: Displays the current climate conditions of the selected destination.
4. **Emergency**: Offers emergency contact information for the specified location.
5. **Security**: Provides tips and advice on safety and security measures to be aware of while traveling.
6. **Food**: Recommends nearby food places based on the user's location.

If the user doesn't select any option and prompts the web application, it will generate queries relevant to the context of the user's location, image (if uploaded), and current date.

### 3. Login

Allows registered users to log in to their accounts.

### 4. Register

Enables new users to create accounts for accessing the Travel Smart WebApp's features.

## Backend

### 1. Login Route

Handles user authentication and login functionality.

### 2. Register Route

Manages user registration and account creation.

### 3. Upload Route

Allows users to upload files, with the 'type' field determining which button was clicked, thus generating prompts accordingly.

### 4. General Route

Handles general queries related to travel if no specific context is provided. Utilizes Gemini to extract location information from uploaded images and responds accordingly.

## Backend Flow

1. The uploaded image is processed by Gemini to extract location information.
2. The location, along with the context of buttons clicked and prompts, is passed to the backend for processing.
3. The backend generates appropriate responses based on the received information and sends them back to the frontend for display.

## Text-to-Speech Feature

The Travel Smart WebApp also incorporates a text-to-speech feature utilizing a Hugging Face model, allowing users to listen to responses instead of reading them.

## Usage

1. Visit the landing page and either log in or register.
2. Upon logging in, access the dashboard to interact with the Travel Smart WebApp and utilize its various functionalities.
3. Upload images, select buttons, or prompt the web application for assistance in planning your trip or obtaining travel-related information.

Enjoy your seamless travel planning experience with our AI-powered Travel Smart WebApp!