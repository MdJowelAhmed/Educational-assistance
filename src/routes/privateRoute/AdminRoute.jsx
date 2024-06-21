import PropTypes from 'prop-types'
import useRole from '../../Hooks/useRole'
import Spinner from '../../pages/Spinner/Spinner'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <Spinner />
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}
AdminRoute.propTypes = {
    children: PropTypes.element,
  }

export default AdminRoute;