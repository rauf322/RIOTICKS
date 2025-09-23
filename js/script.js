import { displayMovieSlider, displayTVSlider } from './utils/slider.js';
import { displayPopularMovie } from './components/movies.js';
import { displayPopularShows } from './components/tvShows.js';
import { displayTvDetails } from './components/tvDetailsPage.js';
import { displayMovieDetails } from './components/movieDetailsPage.js';
import { navLinksHighlighter } from './components/navBar.js';
import { searchMovie } from './components/searchPage.js';

function checkPage() {
  const currentPage = window.location.pathname;
  console.log('Current page:', currentPage);
// More flexible matching using includes() instead of exact matches
  if (currentPage.includes('shows')) {
    console.log('Loading TV shows page');
    displayTVSlider();
    displayPopularShows();
  } else if (currentPage.includes('tv-details')) {
    console.log('Loading TV details page');
    displayTvDetails();
  } else if (currentPage.includes('movie-details')) {
    console.log('Loading movie details page');
    displayMovieDetails();
  } else if (currentPage.includes('search')) {
    console.log('Loading search page');
    searchMovie();
  } else {
    // Default to movies page (for index.html, root path, or any other path)
    displayMovieSlider();
    displayPopularMovie();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkPage();
  navLinksHighlighter();
});
