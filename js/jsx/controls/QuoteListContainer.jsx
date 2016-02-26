import quoteListContainer from "../../logic/quote-list-container";
// importing the widget which this container handles
import QuoteList from "./QuoteList.jsx";

// build the container for our widget
const QuoteListContainer = ReactRedux.connect( mapStateToProps, mapDispatchToProps )( QuoteList );

// export the container
export default QuoteListContainer;
