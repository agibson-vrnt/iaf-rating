import { mapState, mapDispatch } from "../../logic/mappers/add-quote-mappers";

// importing the connect utility from react-redux - this creates the container for us
import { connect } from "react-redux";

// importing the widget which this container handles
import AddQuote from "./AddQuote.jsx";

// build the container for our widget
const AddQuoteContainer = connect( mapStateToProps, mapDispatchToProps )( AddQuote );

// export the container
export default AddQuoteContainer;
