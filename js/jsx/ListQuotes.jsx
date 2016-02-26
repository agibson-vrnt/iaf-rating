import React, { Component, PropTypes } from "react";
import QuoteList from "./controls/QuoteList.jsx";

class ListQuotes extends Component {

	render() {

		var { quotes } = this.props;
		if( quotes && quotes.created && quotes.created.length ) {

			var created = quotes.created.map( q => {

				return Object.assign( {}, q, { href: "/quotes/retrieve/" + q.id } );

			} );
			return <QuoteList created={created} />;

		} else {

			return <p>You don't have any quotes yet.</p>;

		}

	}

}
ListQuotes.propTypes = { quotes: PropTypes.object };
export default ListQuotes;
