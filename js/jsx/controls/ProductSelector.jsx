import { React } from "../../iaf";

export default class HelloWorld extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	handleChange() {

		var product = this.refs.product.value;
		this.props.selectProduct( product );

	}

	render() {

console.log( this.props.selected );
		return <select ref="product" name="product" className="form-control" defaultValue={this.props.selected || ""} onChange={e => this.handleChange( e )}>
			<option value="" disabled>-- select a product --</option>
			<option value="standard">Standard</option>
			<option value="premium">Premium</option>
		</select>;

	}

}
