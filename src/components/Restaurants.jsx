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
    const { name } = this.props;

    return (
      <div>
        <h3>{ name }</h3>
        <div>{ this.state && this.state.restaurants ?  JSON.stringify(this.state.restaurants) : '' }</div>
    
      </div>
    );
  }
}
export default Restaurant;


