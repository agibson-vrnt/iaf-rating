import { React } from "../../iaf";

export default class TermSelector extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	render() {

		return <select name="term" className="form-control" defaultValue="">
			<option value="" disabled>-- select a term --</option>
			<option value="12">1 year</option>
			<option value="24">2 years</option>
			<option value="36">3 years</option>
			<option value="60">5 years</option>
			<option value="120">Lifetime</option>

		</select>;

	}

}
