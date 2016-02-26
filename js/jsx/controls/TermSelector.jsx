import React from "react";
var { Component, PropTypes } = React;

class TermSelector extends Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	handleChange() {

		this.props.selectTerm( this.refs.term.value );

	}

	renderTermOption( term ) {

		return <option key={term.value} value={term.value}>{term.text}</option>;

	}

	render() {

		var selected = this.props.selected ? this.props.selected.value : "";
		return <select ref="term" name="term" className="form-control" value={selected} onChange={e => this.handleChange( e )}>

			<option value="" disabled>-- select a term --</option>
			{this.props.available.map( term => this.renderTermOption( term ) )}

		</select>;

	}

}
TermSelector.propTypes = {

	selectTerm: PropTypes.func.isRequired,
	selected: PropTypes.object,
	available: PropTypes.array

};
export default TermSelector;
