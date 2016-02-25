
import { React, ReactRedux, Redux, ReduxThunk } from "../iaf";
import AddQuoteContainer from "./controls/AddQuoteContainer.jsx";
import * as actionCreators from "../logic/action-creators/quote-action-creators";

var Provider = ReactRedux.Provider;
var applyMiddleware = Redux.applyMiddleware;
var thunkMiddleware = ReduxThunk.thunkMiddleware;

import quoteReducers from "../logic/reducers/quote-reducers";

export default class AddAQuote extends React.Component {

	componentWillMount() {

		var initialState = { products: { available: this.props.catalogue.slice() } };
		this.store = Redux.createStore(

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
