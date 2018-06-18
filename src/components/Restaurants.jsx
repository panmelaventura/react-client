import React from 'react';
import RestaurantService from '../business/RestaurantService';

export class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Stateful component successfully mounted.');

    let restService = new RestaurantService();
    restService.getRestaurants().then(myList => {
      this.setState({
        ...this.state,
        restaurants: myList
      });
      console.log(this.state.restaurants);
    });
  }

  render() {

    return (
      <div>
        <h3>Lista de Restaurantes</h3>

        {(this.state && this.state.restaurants ? 
          <ul>
            {this.state.restaurants.map(mostrar => (
              <li>
                Restaurante: {mostrar.name}
          </li>
        
            ))}
          </ul>
            : ''
        )}

      </div>

    );
  }
}
export default Restaurant;


