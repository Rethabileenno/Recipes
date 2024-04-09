import Footer from "../components/Footer"; // Import the Footer component
import HeadingText from "../components/HeadingText"; // Import the HeadingText component
import HeroRecipe from "../components/HeroRecipe"; // Import the HeroRecipe component
import Navbar from "../components/Navbar"; // Import the Navbar component
import RecipeList from "../components/RecipeList"; // Import the RecipeList component
import Newsletter from "../components/Newsletter"; // Import the Newsletter component

const OurRecipes = () => {
  // This component represents the Our Recipes page of the website

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <HeroRecipe /> {/* Render the HeroRecipe component */}
      <HeadingText /> {/* Render the HeadingText component */}
      <RecipeList /> {/* Render the RecipeList component */}
      <Newsletter /> {/* Render the Newsletter component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default OurRecipes;