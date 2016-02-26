import ReactRedux from "react-redux";

// a mapper for converting the state tree to just the part our widget requires
const mapStateToProps = state => state.quotes || {};

// a mapper taking the dispatch method and building methods for our view compoments to call
//import * as actionCreators from "../action-creators";
const mapDispatchToProps = dispatch => ( {

//	doIt: () => dispatch( actionCreators.asyncAction() )

} );

// build the container for our widget
export default ( control ) = ReactRedux.connect( mapStateToProps, mapDispatchToProps )( control );
