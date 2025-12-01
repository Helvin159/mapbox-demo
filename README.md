# Mapbox Demo

A React application for testing and demonstrating Mapbox GL JS features. This project serves as a testing ground for exploring various Mapbox capabilities.

## Current Features

- **Dynamic Map Style Switching**: Change map styles on the fly (Standard, Streets, Outdoors, Light, Dark, Satellite, etc.)
- **Zoom Controls**: Adjust map zoom levels with interactive controls

## Tech Stack

- **React** 19.2.0
- **TypeScript** 4.9.5
- **Mapbox GL JS** 3.16.0
- **React Router** 7.9.6
- **Create React App** 5.0.1

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Mapbox access token

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   REACT_APP_MAPBOX_DEFAULT_PUBLIC_TOKEN=your_mapbox_token_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
  ├── components/       # Reusable components
  │   ├── MapStyles.tsx # Map style selector component
  │   └── ui/          # UI components (shadcn/ui)
  ├── pages/           # Page components
  │   └── Home.tsx     # Main map demo page
  ├── lib/             # Utility functions
  └── styles/          # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Future Testing

This project will be used to test additional Mapbox features including:
- Custom markers and popups
- Geocoding and reverse geocoding
- Directions API integration
- 3D terrain and buildings
- Custom layers and data visualization
- And more...

## License

This project is for testing and demonstration purposes.
```

This README covers the project's purpose, current features, setup instructions, and future plans.
