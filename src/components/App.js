import React, {Component} from 'react';
import DateList from './dateList/DateList.js';
import Header from './header/header.js';
import renderIf from 'render-if';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {loadAllData: state.loadAllData, retrieveToken: state.retrieveToken}
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <DateList/>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
