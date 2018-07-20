import React, { Component } from 'react';
import {Table, thead, tbody} from 'react-bootstrap';

// Display the restaurant list
class RestaurantsList extends Component {
    
    render() {

        // get each each row of restaurant data using the passed prop
        let tablerowJSX = this.props.restaurants.map(location => {
   
            // get the list of cuisine types as comma separated string
            let c = 0;
            let cuisineTypesJSX = location.CuisineTypes.map(cuisine => {
                //return (<tr><td>{cuisine.Name}</td></tr>)
                if (c > 0){
                    c++;
                    return (", "+cuisine.Name)
                }
                else {
                    c++;
                    return cuisine.Name
                }
            })

            let rowsJSX =(<tr>
                 <td>{location.Name}</td>
                 <td>{cuisineTypesJSX}</td>
                 <td>{location.RatingStars}</td>
               </tr>);
         
              return rowsJSX;
   
     });

     // create the table with the restaurant data
     let tableJSX =  (<Table className="restaurantTable" id="restaurant_table" striped bordered condensed hover>
        <thead>
        <tr>
            <th>Name</th>
            <th>Cuisine Types</th>
            <th>Rating</th>             
        </tr>
        </thead>
        <tbody>
        {tablerowJSX}
        </tbody>
        </Table>);


        return (
            <div id="restaurant_list">
                {tableJSX}
            </div>
        )
    }

}

export default RestaurantsList
