import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backdrop-blur">
      <img
        src={JSONData.MainImage}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          display: 'block',
          borderRadius: '50%',
        }}
      ></img>
    </div>
    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
        <h1
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: '500',
          }}
        >
          {JSONData.Name}
        </h1>
        ____
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'medium',
                  letterSpacing: '1px',
                }}
              >
                {item}
              </div>
            )
          })}
        </p>
      </div>
    </div>
    <nav
      className="backdrop-blur"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('education')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('resume')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Connect
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
