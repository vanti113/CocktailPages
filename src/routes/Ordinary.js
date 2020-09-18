import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Drinks from "../components/ordinary_drinks";
import "./Ordinary.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ordinary: [],
    };
  }

  getOrdinaryData = async () => {
    const {
      data: { drinks },
    } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    );
    console.log(drinks);
    this.setState({
      ordinary: drinks.slice(0, 99), //100개의 데이터를 얻어오는게 너무 많아서 10개로 줄임. 랜덤식을 사용해서 고르게 할까?
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getOrdinaryData();
  }
  render() {
    const { isLoading, ordinary } = this.state;
    return (
      <div className="main">
        {isLoading ? (
          <div className="loader">
            <h1>Now Loading...</h1>
          </div>
        ) : (
          <div className="body">
            <div className="ordinary_header">
              <span>They are Called..Ordinary</span>
              <h5>However, hidden personality and splendor</h5>
            </div>
            <div className="ordinary_container">
              {ordinary.map((stuff) => {
                return (
                  <Link
                    key={stuff.idDrink}
                    className="ordinary_link"
                    to={`/ordinary/${stuff.idDrink}`}
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
