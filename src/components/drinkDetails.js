import React from "react";
import axios from "axios";

class DrinkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      drinks: [],
    };
  }

  getOrdinaryInfo = async (id) => {
    const {
      data: { drinks },
    } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    this.setState({ drinks: drinks[0], isLoading: false });
    console.log(drinks);
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(`You are selected drink for No. ${id}`);
    this.getOrdinaryInfo(id);
  }
  getPictures = (pics, measure) =>
    pics.map((arr, index) => {
      if (arr === null || arr === "") {
        return null;
      } else {
        const source = `https://www.thecocktaildb.com/images/ingredients/${arr}-small.png`;
        return (
          <div key={index}>
            <img src={source} alt={arr} title={arr} />
            <span>{arr}</span>
            <hr />
            <span>{measure[index] ? measure[index] : "As you like"}</span>
          </div>
        );
      }
    });
  drawFeatures(drinks) {
    const {
      strDrink,
      strIBA,
      strGlass,
      strInstructions,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
    } = drinks;
    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
    ];
    const measure = [
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
    ];
    console.log(measure);
    /* 여기에 유저에게 보여질 구조를 짠다 */
    return (
      <div className="ordinary_detail_main">
        <div className="detail_top">
          <div className="detail_title">
            <span>{strDrink}</span>
            <span>{strIBA ? strIBA : "Ordinary Drinks"}</span>
          </div>
        </div>
        <div className="detail_main1">
          <div className="main_image">
            <img src={strDrinkThumb} alt={strDrink} title={strDrink} />
          </div>

          <div className="image_desc">
            <div className="mix_desc">How to Mix</div>
            <p>
              {strInstructions
                ? strInstructions
                : "Just follow your flavor! Don't worry about this."}
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="footer_title">
            <span>Ingredients</span>
          </div>
          <div className="images">{this.getPictures(ingredients, measure)}</div>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, drinks } = this.state;
    return (
      <div className="ordinary_detail">
        {isLoading ? (
          <div className="detail_loader">
            <span>Now Loading..</span>
          </div>
        ) : (
          this.drawFeatures(drinks)
        )}
      </div>
    );
  }
}

export default DrinkDetail;
