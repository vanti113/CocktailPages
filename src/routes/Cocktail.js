import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Drinks from "../components/cocktail_drinks";
import "./Cocktail.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      cocktail: [],
    };
  }

  getCocktailData = async () => {
    const {
      data: { drinks },
    } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    console.log(drinks);
    this.setState({
      cocktail: drinks.slice(0, 99), //100개의 데이터를 얻어오는게 너무 많아서 10개로 줄임. 랜덤식을 사용해서 고르게 할까?
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getCocktailData();
  }
  render() {
    const { isLoading, cocktail } = this.state;
    return (
      <div className="main">
        {isLoading ? (
          <div className="loader">
            <h1>Now Loading...</h1>
          </div>
        ) : (
          <div className="body">
            <div className="header">
              <span>Enjoy your Cocktail</span>
              <h5>And up your passion</h5>
            </div>
            <div className="container">
              {cocktail.map((stuff) => {
                return (
                  <Link
                    key={stuff.idDrink}
                    className="cocktail_link"
                    to={`/cocktail/${stuff.idDrink}`}
                  >
                    <Drinks
                      key={stuff.idDrink}
                      name={stuff.strDrink}
                      image={stuff.strDrinkThumb}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
