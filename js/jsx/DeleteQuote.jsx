import React, { Component, PropTypes } from "react";
import ShowQuote from "./controls/ShowQuote.jsx";

class DeleteQuote extends Component {

	render() {

		var quote = this.props.quote;
		if( quote ) {

			quote.when = new Date( quote.when );
			return <div>

				<ShowQuote quote={this.props.quote} />
				<form className="well" method="POST">

					<h4>You are about to delete this quote. Please click to confirm.</h4>
					<input type="submit" className="btn btn-danger" value="CONFIRM" />

				</form>
				<a href="/quotes">Your quotes</a>

			</div>;

		} else {

			return <div>

				<p>Your quote has been deleted.</p>
				<a href="/quotes">Your quotes</a>
			</div>;

		}


	}

}
DeleteQuote.propTypes = { quote: PropTypes.object };
export default DeleteQuote;
