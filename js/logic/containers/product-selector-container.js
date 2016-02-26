import ReactRedux from "react-redux";

// a mapper for converting the state tree to just the part our widget requires
const mapStateToProps = state => state.products || {};

// a mapper taking the dispatch method and building methods for our view compoments to call
import * as actionCreators from "../action-creators/quote-action-creators";
const mapDispatchToProps = dispatch => ( {

	selectProduct: ( productId ) => dispatch( actionCreators.selectProduct( productId ) )

} );

// export the container
export default ( control ) => ReactRedux.connect( mapStateToProps, mapDispatchToProps )( control );
