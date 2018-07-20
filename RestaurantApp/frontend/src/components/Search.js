import React from "react";
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

// Provides the input menu for the user to enter the outcode for the restaurant list
class Search extends React.Component {

    formSubmit = (event) => {
        event.preventDefault();

        let searchOutCode = this.refs.outCode.value;
        //this.refs.outCode.value = "";

        //pass the entered outcode as arguement to the callback function
        this.props.submitCallback(searchOutCode);
    }

    render(){

        return (
            <Navbar className="searchOutcode">
                <Navbar.Collapse>
                    <h1>Restaurant Search App</h1>
                    <Navbar.Form>
                    <form onSubmit={this.formSubmit}>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </span>
                        <input className="form-control" placeholder="Enter OutCode" ref="outCode"/>
                    </div>
                </form>    
                    </Navbar.Form>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}


export default Search;