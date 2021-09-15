import PropTypes from 'prop-types'

const Button = ({color, text, click}) => {
    return(
        <button 
        style={{backgroundColor: color}} 
        className="btn"
        onClick={click}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button