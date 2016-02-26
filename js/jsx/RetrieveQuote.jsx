import React, { Component, PropTypes } from "react";
import ShowQuote from "./controls/ShowQuote.jsx";

class AddAQuote extends Component {

	render() {

		var quote = this.props.quote;
		if( quote ) {

			quote.when = new Date( quote.when );
			return <div>

				<ShowQuote quote={quote} />
				<div className="well">

					<a href={"./" + quote.id + "/delete"} className="btn btn-danger">Delete</a>

				</div>

			</div>;

		} else {

			return <div>

				<p>Your quote could not be retrieved. Perhaps it was too good to be true?</p>

			</div>;

		}

	}

}
AddAQuote.propTypes = { quote: PropTypes.object };
export default AddAQuote;
