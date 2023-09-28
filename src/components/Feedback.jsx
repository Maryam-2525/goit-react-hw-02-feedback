
import React, {Component } from "react";
import PropTypes from 'prop-types';


 class FeedBack extends Component {
  
  
    handleIncrement = evt => {
      console.log("Increment button was clicked!", evt); // works
      console.log("this.props: ", this.props); // works
    };
  
    handleDecrement = evt => {
      console.log("Decrement button was clicked!", evt); // works
      console.log("this.props: ", this.props); // works
    };
  
    constructor() {
      super();
  
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
  
  
    render() {
      const { step } = this.props;
  
      return (
        <div>
          <h2>Please leave a Feedback</h2>
          <span></span>
          <button type="button" onClick={this.handleIncrement}>
            Good {step}
          </button>
          <span></span>
          <button type="button" onClick={this.handleDecrement}>
            Neutral {step}
          </button>
          <span></span>
          <button type="button" onClick={this.handleIncrement}>
            Bad {step}
          </button>
        </div>
      );
    }
  }

  export default FeedBack;