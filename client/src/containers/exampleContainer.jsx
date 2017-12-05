// // Contains the logic behind each component, export to the corresponding component
// // If you want to render stuff, it is generally done in the corresponding component
//
// import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { exampleAction } from '../actions/ExamplePage/exampleAction';
//
// class ExampleContainer extends React.Component {
//
//
// }
//
//
// // Function below watches global store for changes
// function mapStateToProps(state) {
//   return {
//     example: state.example,
//   };
// }
//
// // Function below allows container to dispatch actions
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ example: exampleAction }, dispatch);
// }
//
// export default connect(mapStateToProps, matchDispatchToProps)(Query);
