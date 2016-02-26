import termSelectorContainer from "../../logic/containers/term-selector-container";

// importing the widget which this container handles
import TermSelector from "./TermSelector.jsx";

// build the container for our widget
const TermSelectorContainer = termSelectorContainer( TermSelector );

// export the container
export default TermSelectorContainer;
