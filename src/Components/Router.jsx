/**
 * Import des méthodes de react-router-dom:
 * BrowserRouter que l'on renommera Router
 * Routes et Route
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import des composants renvoyant nos rendues
import Home from "../pages/Home";
import RecipeDetail from "../pages/Food/RecipeDetail";
import Recipes from "../pages/Food/Recipes";
import AddRecipe from "../pages/Food/AddRecipe";
import MoviesSeries from "../pages/Cinema/MoviesSeries";
import MovieSeriesDetail from "../pages/Cinema/MovieSeriesDetail";
import Login from "../pages/Account/Login";
import Signup from "../pages/Account/Signup";
import MyAccount from "../pages/Account/MyAccount";
import MyRecipes from "../pages/Account/MyRecipes";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import LegalNotice from "../pages/LegalNotice";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

export default function AppRouter() {
  return (
    // Composant principale (BrowserRouter)
    <Router>
      {/* Conteneur de toutes les routes */}
      <Routes>
        {/* Pages principales */}
        {/* Route permet d'associer une url à un composant  */}
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} /> 
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/movies-and-series" element={<MoviesSeries />} />
        <Route path="/movies-and-series/:movieId" element={<MovieSeriesDetail />} />
        
        {/* Authentification */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />*/}

        {/* Gestion utilisateur */}
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-recipes" element={<MyRecipes />} />

        {/* Section Footer */}
        <Route path="/contact" element={<Contact />} />/
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        {/* Page 404 */}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}
