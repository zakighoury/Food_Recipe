import React from 'react'
import Header from "../../components/Header/Header";
import RecipeHeader from "../../Recipe-Section/Recipe-Header/Recipe"
import RecipePics from "../../Recipe-Section/Recipe-Pics/Recipe-Pics"
import Footer from '../../components/Footer/Footer';

function RecipePage() {
  return (
    <div>
      <Header />
      <RecipeHeader />
      <RecipePics />
      <Footer />
    </div>
  )
}

export default RecipePage
