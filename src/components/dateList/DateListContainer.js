import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions'
import DateList from './DateList';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllDate
  }, dispatch);
};

class DateListWrapper extends Component {

  componentDidMount = () => {
    this.props.getAllDate();
  }

  render() {
    return (<DateList />)
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(DateListWrapper);
