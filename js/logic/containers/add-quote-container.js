import ReactRedux from "react-redux";

// a mapper for converting the state tree to just the part our widget requires
const mapState = state => state.terms || {};

// a mapper taking the dispatch method and building methods for our view compoments to call
const mapDispatch = () => ( { } );

export default ( control ) => ReactRedux.connect( mapState, mapDispatch )( control );
