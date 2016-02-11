import { React } from "../../iaf";
import ProductSelectorContainer from "./ProductSelectorContainer.jsx";
import TermSelectorContainer from "./TermSelectorContainer.jsx";

export default class HelloWorld extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	renderTermSelector() {

		var { available } = this.props;
		if( available && available.length ) {

			return <div className="form-group">

				<label>Select a term</label>
				<TermSelectorContainer />

			</div>;

		}

	}

	render() {

console.log( this.props );
		return <form method="POST">

			<div className="form-group">

				<label>Select a product</label>
				<ProductSelectorContainer />

			</div>
			{this.renderTermSelector()}
			<input type="submit" value="Submit" className="btn btn-default" />

		</form>;

	}

}
