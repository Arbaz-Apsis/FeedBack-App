import PropTypes from 'prop-types'
import { version } from 'react'


function Button({children , version , type , isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps= {
    version : 'primary',
    type : 'button',
    isDesabled : false
}

Button.propTypes = {
     children : PropTypes.node.isRequired,
     version : PropTypes.string,
     text  : PropTypes.string,
     isDesabled : PropTypes.bool


}
export default Button
