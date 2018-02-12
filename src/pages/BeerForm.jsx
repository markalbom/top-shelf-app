import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import SingleNav from './../components/SingleNav';
import Filter from './../components/Filter';
import './../css/App.css';
import './../css/reset.css';

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:        props.beer ? props.beer.name : '',
      brewery:     props.beer ? props.beer.brewery : '',
      description: props.beer ? props.beer.description : '',
      typeID: props.beer ? props.beer.typeID : '',


    };
    this.handleChange = this.handleChange.bind(this);
  }

/* the purpose of the handleChange function is to handle / update multi-forms.  So name maps to name on the input, and value maps to value on the input, and they both have a corresponding element in class state. */
//so you name the function handleChange, you pass in 'event' as the argument so that the event that it is .  Create a var
handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }


  render() {
      console.log(this.props.type);
    console.log({'BeerForm loaded': this.state});

    return (

      <div className="beerForm">
        <p>This is the Beerform. It will display the detail information for each beer and allow for add & edit. </p>

      {/* It's its an edit for then update for that id, if its add then just post new state. */}
        <form className={this.props.isadd ? 'addForm' : 'editForm'}

          // figure out what value is stored in isAdd.. true means add. False means edit
        onSubmit={this.props.isadd
          {/* do this for add */}
          ? event => this.props.beerSubmit('Put', event, this.state )
        {/* do this for edit, you now have an id and info so populate form before editing */}
          : event => this.props.beerSubmit('Post' , event,
            this.state, this.props.beer.id) }>

          <div className="formEntry">
            <input
              type="text"
              className="formInput"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />


            <input
              type="text"
              className="formInput"
              name="brewery"
              placeholder="Brewery"
              value={this.state.brewery}
              onChange={this.handleChange}
            />


            <input
              type="text"
              className="formInput"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />


            <select
              name="typeID"
              value={this.state.value}
              onChange={this.handleChange}
              className="formInput2"
            >
              <option value="1">Select Type</option>
              {this.props.type.map(type => (
                <option
                  value={type.id}
                  key={type.id}
                > {type.name}
                </option>
              ))}
            </select>

{/*
            <input
              type="text"
              className="formInput"
              name="typeID"
              placeholder="Type"
              value={this.state.type}
              onChange={this.handleChange}
            />
*/}

            <input
              type="submit"
              className="nav"
              value={this.props.addBeer ? 'AddBeer' : 'Submit'}
            />

          </div>
        </form>
      </div>


    );
  }
}

export default BeerForm;
