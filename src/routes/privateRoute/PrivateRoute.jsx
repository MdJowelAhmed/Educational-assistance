import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../pages/Spinner/Spinner';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <Spinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}
export default PrivateRoute;