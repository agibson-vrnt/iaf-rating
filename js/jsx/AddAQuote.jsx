import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import { thunkMiddleware } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import AddQuoteContainer from "./controls/AddQuoteContainer.jsx";
import * as actionCreators from "../logic/action-creators/quote-action-creators";

import quoteReducers from "../logic/reducers/quote-reducers";

class AddAQuote extends Component {

	componentWillMount() {

		var initialState = { products: { available: this.props.catalogue.slice() } };
		this.store = createStore(

			quoteReducers,
			initialState,
			applyMiddleware( thunkMiddleware )

		);
		if( this.props.product ) {

			this.store.dispatch( actionCreators.selectProduct( this.props.product ) );

		}
		if( this.props.term ) {

			this.store.dispatch( actionCreators.selectTerm( this.props.term ) );

		}

	}

	render() {

		return <Provider store={this.store}><AddQuoteContainer /></Provider>;

	}

}
AddAQuote.propTypes = { catalogue: PropTypes.array, product: PropTypes.object, term: PropTypes.object };
export default AddAQuote;
