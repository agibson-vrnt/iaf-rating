/*eslint-env browser*/
import Main from "./jsx/Main.jsx";
var partials = {

	Main: Main

};

// export as client-side namespace
if( typeof window !== "undefined" && window.iaf && window.iaf.rating ) {

	window.iaf.rating.partials = partials;

}
// export as module
export default partials;
