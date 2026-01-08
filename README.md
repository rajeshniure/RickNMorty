# Rick and Morty Character Explorer

A modern React application built with TypeScript and Vite that allows users to explore characters from the popular TV show *Rick and Morty*. Browse through hundreds of characters, search by name, filter by status, species, and gender, view detailed information, and manage your favorite characters.

## Features

- **Character Browser**: Browse all Rick and Morty characters with pagination
- **Search Functionality**: Search characters by name with debounced input
- **Advanced Filtering**: Filter characters by status (Alive, Dead, Unknown), species, and gender
- **Character Details**: View detailed information about each character including episodes they appear in
- **Favorites System**: Add/remove characters to/from favorites with local storage persistence
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Fast Performance**: Optimized with Vite for quick development and builds

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: React Icons
- **API**: Rick and Morty REST API (https://rickandmortyapi.com/)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ricknmorty.git
   cd ricknmorty
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## Building for Production

To build the application for production:

```bash
npm run build
```


## API Usage

This application uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character data. The API provides information about characters, episodes, and locations from the show.


## Live URL
https://rick-n-morty-rosy.vercel.app/