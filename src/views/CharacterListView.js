import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'

import { CharacterList } from "../components";
import { getData } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    if (this.props.fetching) {
      return (
        <Loader type="Ball-Triangle" color="#somecolor" height={80} width={80} />
      )
    }
    console.log(this.props)
    return (
      
      <div className="CharactersList_wrapper">
        <Loader type="Ball-Triangle" color="#somecolor" height={80} width={80} />
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData }
)(CharacterListView);
