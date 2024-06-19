import PropTypes from 'prop-types'
import { ScaleLoader } from 'react-spinners'
const Spinner = ({ smallHeight }) => {
  return (
    <div
          className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
          flex 
          flex-col 
          justify-center 
          items-center `}
        >
          <ScaleLoader size={100} color='red' />
        </div>
  );
};
Spinner.propTypes = {
  smallHeight: PropTypes.bool,
}

export default Spinner;