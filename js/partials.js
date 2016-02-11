import Main from "./jsx/Main.jsx";
var partials = {

	Main: Main

};
if( typeof window !== "undefined" ) {

	var ns = ( window.iaf = window.iaf || {} );
	ns.rating = ns.rating || {};
	ns.rating.partials = partials;

}
export default partials;
