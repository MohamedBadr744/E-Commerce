
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export function ProtectedRoute(props) {
  const { token } = useContext(UserContext)
  if (token) {
    return props.children
  }
  else {
    alert("pls login first")
    return <Navigate to={'/Login'}></Navigate>
  }
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.node, // PropTypes.node can be anything that can be rendered: numbers, strings, elements, or an array (or fragment) containing these types
  otherProp: PropTypes.string // Example of another prop type
};