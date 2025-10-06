# 🎬 TMDB Movies App

A modern, responsive React application for browsing trending movies and managing your personal watchlist using The Movie Database (TMDB) API.

## 🔧 Technologies Used

- **Frontend Framework**: React 19.1.1
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Code Quality**: ESLint

## ✨ Features

- 🎭 **Browse Trending Movies** - Discover popular movies with beautiful poster displays
- 📱 **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- ⭐ **Personal Watchlist** - Add/remove movies to your personal watchlist
- 🔍 **Search Functionality** - Search through your watchlist
- 📊 **Sort by Rating** - Sort your watchlist by movie ratings (ascending/descending)
- 💾 **Persistent Storage** - Watchlist data persists using localStorage
- 📄 **Pagination** - Navigate through multiple pages of movies
- 🎨 **Modern UI** - Clean, modern interface with hover effects and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TMDB-movies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Hero banner component
│   ├── MovieCard.jsx   # Individual movie card
│   ├── Navbar.jsx      # Navigation bar
│   └── Pagination.jsx  # Pagination controls
├── features/           # Redux slices
│   ├── moviesSlice.js  # Movies data management
│   ├── pageSlice.js    # Pagination state
│   └── watchListSlice.js # Watchlist management
├── Pages/              # Main application pages
│   ├── Movies.jsx      # Movies listing page
│   └── WatchList.jsx   # Watchlist page
├── store/              # Redux store configuration
│   └── store.js        # Store setup
└── assets/             # Static assets
    └── images/         # Image files
```

## 🎯 Key Components

### Movies Page
- Displays trending movies in a responsive grid
- Shows movie posters with hover effects
- Add/remove movies to/from watchlist
- Pagination for browsing multiple pages

### Watchlist Page
- View all saved movies in a table format
- Search functionality to filter movies
- Sort movies by rating (ascending/descending)
- Remove movies from watchlist
- Persistent storage using localStorage

### Movie Card
- Displays movie poster as background image
- Shows movie title overlay
- Add/remove button with visual feedback
- Responsive design for all screen sizes

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 UI/UX Features

- **Modern Design**: Clean, minimalist interface
- **Hover Effects**: Smooth transitions and scaling effects
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Graceful error messages
- **Accessibility**: Keyboard navigation and screen reader support

## 🔐 API Integration

The app integrates with The Movie Database (TMDB) API to fetch:
- Popular/trending movies
- Movie posters and images
- Movie metadata (title, rating, popularity, genres)

## 💾 Data Persistence

- Watchlist data is automatically saved to localStorage
- Data persists across browser sessions
- No server-side storage required

## 🚀 Future Enhancements

### Planned Features
- 🎬 **Movie Details Page** - Detailed view with cast, crew, plot summary, and trailers
- 🔍 **Advanced Search** - Search movies by title, genre, year, rating, and cast
- 🏷️ **Genre Filtering** - Filter movies by specific genres
- ⭐ **User Ratings & Reviews** - Allow users to rate and review movies
- 👤 **User Authentication** - User accounts with personalized watchlists
- 🌙 **Dark/Light Theme** - Theme toggle for better user experience
- 🎯 **Recommendations** - AI-powered movie recommendations based on watchlist

### Technical Improvements
- ⚡ **Performance Optimization** - Lazy loading, image optimization, and caching
- 🧪 **Testing Suite** - Unit tests, integration tests, and E2E testing
- 📱 **Better Mobile UX** - Enhanced touch interactions and gestures
- ♿ **Accessibility** - WCAG compliance and screen reader optimization
- 🔒 **Security** - API key protection and input validation
- 📊 **Monitoring** - Error tracking and performance monitoring
- 🚀 **CI/CD Pipeline** - Automated testing and deployment
- 📦 **Code Splitting** - Optimized bundle sizes and loading
- 🔄 **State Persistence** - Enhanced data persistence strategies
- 📈 **SEO Optimization** - Meta tags, structured data, and search optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Happy Movie Browsing! 🍿**
