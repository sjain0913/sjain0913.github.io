import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
         Built with <a href="http://gatsby-dimension.surge.sh">Gatsby.js</a> by <a href="https://saumyajain.org/"> Saumya Jain</a>  
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
