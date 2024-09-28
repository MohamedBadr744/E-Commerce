import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
function ProductItem({ product }) {
  return (
 
  );
}

export default ProductItem;

ProductItem.propTypes = {
  children: PropTypes.node, // PropTypes.node can be anything that can be rendered: numbers, strings, elements, or an array (or fragment) containing these types
  product: PropTypes.string // Example of another prop type
};