import "./App.css";
import img1 from "../src/assets/i1.jpeg";
function App() {
  return (
    <div className="x1">
      <div className="x2">
        <img src={img1} alt="_Image" />
        <div>
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with your
            choice of cheese, vegetables, or meats
          </p>
          <div className="x3">
            <p>Preparation time</p>
            <div className="x4">
              <ul>
                <li><b>Total: </b>Approximately 10 minutes</li>
                <li><b>Preparation: </b>5 minutes</li>
                <li><b>Cooking: </b>5 minutes</li>
              </ul>
            </div>
            
          </div>
          <div className="x5">
              <h4>Ingredients</h4>
              <div className="x6">
                <ul>
                  <li>2-3 large eggs</li>
                  <li>Salt, to taste</li>
                  <li>Pepper, to taste</li>
                  <li>1 tablespoon of butter or oil</li>
                  <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
              </div>
          </div>
          <hr />
          <div className="x7">
              <h4>Instructions</h4>
              <div className="x8">
                <ol>
                  <li><b>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                  <li><b>Heat the pan: </b>Place a non-stick frying pan over medium heat and add butter or oil.</li>
                  <li><b>Cook the omelette: </b>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                  <li><b>Add fillings (optional): </b>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                  <li><b>Fold and serve: </b>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                  <li><b>Enjoy: </b>Serve hot, with additional salt and pepper if needed.</li>
                </ol>
              </div>
          </div>
          <hr />
          <div className="x9">
              <h4>Nutrition</h4>
              <p>The table below shows nutritional values per serving without the additional fillings.</p>
              <div >
                <p>Calories</p>
                 <p>277kcal</p>
              </div> 
              <hr/>
              <div >
                <p>Carbs </p>
                 <p>0h</p>
              </div> 
              <hr/>
              <div >
                <p>Protein</p>
                 <p>20gm</p>
              </div> 
              <hr/>
              <div >
                <p>Fat</p>
                 <p>22g</p>
              </div> 
          </div>
        </div>
      </div>
      <p>challenge by <span >Fontend Mentor</span>. Coded by <span>Prity Kumari</span></p>
    </div>
  );
}

export default App;
