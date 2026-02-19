# 🧩 Daily Expense Tracker - MERN Stack Application

A full-stack expense management web application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, log in, and manage their daily expenses with features like adding, editing, deleting, and viewing expenses with date & category filters and total summaries.

![Daily Expense Tracker](https://img.shields.io/badge/MERN-Stack-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)

## 🚀 Features

### ✅ Core Features
- **User Authentication**: Secure registration and login with JWT tokens
- **Expense Management**: Full CRUD operations for expenses
- **Category Filtering**: Filter expenses by predefined categories
- **Date Filtering**: Filter expenses by date ranges with quick filters
- **Expense Summary**: View total expenses and category-wise breakdowns
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Instant UI updates with React Context
- **Protected Routes**: Secure routes with authentication middleware

### 🎨 UI/UX Features
- **Modern Design**: Clean and intuitive interface
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Success and error notifications
- **Responsive Layout**: Works on all device sizes
- **Dark/Light Theme Ready**: Easy to extend with theme switching

## 📁 Project Structure

```
DailyExpenseTracker/
├── backend/                    # Node.js + Express backend
│   ├── controllers/           # Route controllers
│   │   ├── authController.js
│   │   └── expenseController.js
│   ├── middleware/            # Custom middleware
│   │   └── authMiddleware.js
│   ├── models/               # Mongoose models
│   │   ├── User.js
│   │   └── Expense.js
│   ├── routes/               # API routes
│   │   ├── authRoutes.js
│   │   └── expenseRoutes.js
│   ├── config.env            # Environment variables
│   ├── package.json
│   └── server.js             # Main server file
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ExpenseCard.jsx
│   │   │   ├── SummaryCard.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/          # React Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   └── ExpenseContext.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddExpense.jsx
│   │   │   └── EditExpense.jsx
│   │   ├── App.jsx           # Main App component
│   │   ├── main.jsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library
- **Context API** - State management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DailyExpenseTracker
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```bash
   cd ../backend
   cp config.env .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/daily-expense-tracker
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # For local MongoDB
   mongod
   
   # Or use MongoDB Atlas (cloud)
   # Update MONGODB_URI in .env with your Atlas connection string
   ```

6. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   
   The backend will start on `http://localhost:5000`

7. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   
   The frontend will start on `http://localhost:3000`

8. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the application.

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Expense Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/expenses` | Get all expenses | Yes |
| POST | `/api/expenses` | Create new expense | Yes |
| GET | `/api/expenses/:id` | Get single expense | Yes |
| PUT | `/api/expenses/:id` | Update expense | Yes |
| DELETE | `/api/expenses/:id` | Delete expense | Yes |
| GET | `/api/expenses/summary` | Get expense summary | Yes |

### Request/Response Examples

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Create Expense
```bash
POST /api/expenses
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "Coffee",
  "amount": 4.50,
  "category": "Food",
  "date": "2024-01-15",
  "note": "Morning coffee"
}
```

## 🎯 Usage Guide

### 1. Registration & Login
- Visit the application and click "Sign Up" to create a new account
- Fill in your name, email, and password
- After registration, you'll be automatically logged in
- Use the login page to sign in with existing credentials

### 2. Adding Expenses
- Click "Add Expense" in the navigation or dashboard
- Fill in the expense details:
  - **Title**: Description of the expense
  - **Amount**: Cost of the expense
  - **Category**: Select from predefined categories
  - **Date**: When the expense occurred
  - **Note**: Optional additional details
- Click "Add Expense" to save

### 3. Managing Expenses
- View all expenses on the dashboard
- Use filters to find specific expenses:
  - Filter by category
  - Filter by date range
  - Use quick filters (Today, Last 7 Days, etc.)
- Edit expenses by clicking the "Edit" button
- Delete expenses by clicking the "Delete" button

### 4. Viewing Summary
- The dashboard shows expense summaries:
  - Total amount spent
  - Number of expenses
  - Category breakdown
  - Recent expenses

## 🔧 Configuration

### Backend Configuration
- **Port**: Change `PORT` in `.env` to use a different port
- **Database**: Update `MONGODB_URI` for your MongoDB connection
- **JWT Secret**: Change `JWT_SECRET` for production security
- **CORS**: Update CORS settings in `server.js` for production domains

### Frontend Configuration
- **API Base URL**: Update proxy settings in `vite.config.js`
- **Theme**: Customize colors in `tailwind.config.js`
- **Build**: Run `npm run build` for production build

## 🚀 Deployment

### Backend Deployment (Render/Heroku)
1. Create a new web service
2. Connect your GitHub repository
3. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
4. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Environment Variables for Production
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/daily-expense-tracker
JWT_SECRET=your-super-secure-jwt-secret-for-production
NODE_ENV=production
```

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

