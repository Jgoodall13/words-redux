import React, { Component } from 'react';
import {connect} from 'react-redux';
import  {showOnPage} from './actions'

const mapStateToProps = state => {
  return {
      words: state.words
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => {
      console.log(event.target.value)
      return dispatch(showOnPage(event.target.value))
    }
  }
}

class App extends Component {
  render() {
    const {words, onInputChange} = this.props;
    return (
      <div className="App">
        <input type="text" placeholder="just type" onChange={onInputChange} />
        <span>{words}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
