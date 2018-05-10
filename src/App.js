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
        <br />
        <span style={{color: "hotPink", fontSize: "30px"}}>{words}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
