import productSelectorContainer from "../../logic/containers/product-selector-container";
// importing the widget which this container handles
import ProductSelector from "./ProductSelector.jsx";

// build the container for our widget
const ProductSelectorContainer = productSelectorContainer( ProductSelector );

// export the container
export default ProductSelectorContainer;
