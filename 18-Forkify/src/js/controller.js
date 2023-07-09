import * as model from './model';
import {MODAL_CLOSE_SEC} from './config.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';

// import icons from '../img/icons.svg'; //Parcel 1
// import icons from 'url:../img/icons.svg'; //Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// console.log(icons);

// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try{

    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks)

    // 1) Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe)

  }
   catch(err){
    recipeView.renderError();
  }
};

const controlSearchResults = async function (){
  try {
    resultsView.renderSpinner();
    console.log(resultsView);

    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));

    // 4) Render inital pagination buttons
    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function(goToPage){

    // 1) Render NEW results
    resultsView.render(model.getSearchResultsPage(goToPage));

    // 2) Render NEW pagination buttons
    paginationView.render(model.state.search);

  console.log(goToPage)
}

// controlRecipes();

const controlServings = function(newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function (){
  // console.log(model.state.recipe.bookmarked);

  // 1) Add/Remove bookmark
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  }
  else {
    model.deleteBookmark(model.state.recipe.id);
  }

  // 2) Update recipe view
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);

  // 3) Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function(newRecipe) {
  try{
  // Show loading spinner
  addRecipeView.renderSpinner();

  // Upload the new recipe data
  await model.uploadRecipe(newRecipe);
  console.log(model.state.recipe);

  // Render recipe 
  recipeView.render(model.state.recipe);

  // Success Message 
  addRecipeView.renderMessage();

  // Render Bookmark View
  bookmarksView.render(model.state.bookmarks);

  // Change ID in URL
  window.history.pushState(null, '', `#${model.state.recipe.id}`);

  // Close form window
  setTimeout(function() {
    addRecipeView.toggleWindow()
  }, MODAL_CLOSE_SEC * 1000);


  } catch(err){
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }

}

const init = function() {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();
