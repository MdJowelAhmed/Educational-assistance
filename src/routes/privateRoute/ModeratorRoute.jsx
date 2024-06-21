import PropTypes from 'prop-types'
import useRole from '../../Hooks/useRole'
import Spinner from '../../pages/Spinner/Spinner'
import { Navigate } from 'react-router-dom'

const ModeratorRoute = ({children}) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <Spinner />
  if (role === 'moderator') return children
  return <Navigate to='/dashboard' />
}

ModeratorRoute.propTypes = {
    children: PropTypes.element,
  }

export default ModeratorRoute;