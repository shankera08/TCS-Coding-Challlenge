import React, { Component } from 'react';
import axios from 'axios';
import {Route, Switch, withRouter} from 'react-router-dom';

// Custom Components
import RestaurantsList from './components/RestaurantsList'; // Component to display the list of restaurants based on the entered outcode
import Search from './components/Search'; // Component to accept user outcode

class App extends Component {

  constructor(){
    super();

    //state to capture the restaurant list
    this.state = {
      restaurants: []
    }
  }

  getRestaurantList = (outcode) => {  

    // Provided Authorization key that did not work
    // 'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI='
    // Instead replaced with 
    // 'Authorization': 'Basic a2luZ3MtaGFjazpqNHlrN3ljb3Q1MHRmMng='

    let config = {
      headers:{'Accept-Tenant': 'uk',
        'Accept-Language': 'en-GB',
        'Authorization': 'Basic a2luZ3MtaGFjazpqNHlrN3ljb3Q1MHRmMng='        
      }
    };    

    axios.get(`https://public.je-apis.com/restaurants?q=${outcode}`,config)
        .then(result => {         
          //console.log(result);

          if(result.data.Restaurants.length === 0){
            this.setState({
              restaurants: []
            },()=>{
              this.props.history.push('/noData')
            })
          }
          else{
            this.setState({
              restaurants: result.data.Restaurants
            }, ()=>{
              this.props.history.push('/restaurants')    
            })
          }
        })
        .catch(error => {
          console.log(`Couldn't get data from source because of error:\n ${error}`);
      })
    
  }

  render() {

    return (
      <div className="App">
          <Search submitCallback={this.getRestaurantList} />

          <Switch>
            <Route path="/noData" render={()=>{
              return (<div className="noData"> <h3>Please enter a valid outcode</h3> </div>)
            }} />
            <Route path="/restaurants" render={()=>{
                return <RestaurantsList restaurants={this.state.restaurants} />
              }} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
