import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

class Date extends Component {
  


}

export default connect(mapStateToProps, mapDispatchToProps)(Date);
