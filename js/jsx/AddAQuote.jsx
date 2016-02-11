
import { React, ReactRedux, Redux } from "../iaf";
import AddQuoteContainer from "./controls/AddQuoteContainer.jsx";

let Provider = ReactRedux.Provider;

var store = Redux.createStore(

	( state = {}, action ) => {

		switch( action.type ) {

			case "select-product":
				return {
					...state,
					products: {

						...state.products,
						selected: action.id

					},
					terms: {

						available: [ [ 12, "1 year" ], [ 24, "2 years" ] ]

					}

				};
			default:
				return state;

		}

	}

);

export default () => <Provider store={store}><AddQuoteContainer /></Provider>;
