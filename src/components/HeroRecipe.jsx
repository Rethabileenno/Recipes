import React from "react";
import './styles/herorecipe-style.css';

const HeroRecipe = () => {
    return (
        <>
            <div id="heroRecipe">
                <div class="font-sans  text-[#333] p-6">
                    <div class="text-center max-w-2xl max-md:max-w-md mx-auto">
                        <div>
                            <p class=" mb-4" id="h4">Mama's Traditional Mzansi Cuisine</p>
                            <h2  id="h1-recipe">Come & explore african traditional delicious recipes</h2>
                            <div class="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_16px_-8px_black] overflow-hidden">
                                <input type='email' placeholder='Search for a recipe' class="w-full font-bold outline-none bg-white pl-4 text-sm" />
                                <button type='button'
                                    class="transition-all text-white font-bold text-sm rounded-full px-5 py-2.5" id="search-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroRecipe;