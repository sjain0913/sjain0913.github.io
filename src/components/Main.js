import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <div>
              <img src={JSONData.AboutImage} alt="" />
            </div>
          </span>
          {/* <p> */}
          {JSONData.AboutContent.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'medium',
                  lineHeight: '1.5',
                }}
              >
                <br />
                {item}
              </div>
            )
          })}

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2 className="major">Work</h2>
          <span>
            <img 
              src={JSONData.WorkImage1}
              alt=""
              style={{
                width: '60%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}  
            />
          </span>
          <br />
          {JSONData.WorkContent1.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'medium',
                  lineHeight: '1.5',
                }}
              >
                <br />
                {item}
              </div>
            )
          })}
          <br />
          <span>
            <img
              src={JSONData.WorkImage2}
              alt=""
              style={{
                width: '60%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}    
              />
          </span>
          <br />
          {JSONData.WorkContent2.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'medium',
                  lineHeight: '1.5',
                }}
              >
                <br />
                {item}
              </div>
            )
          })}
          <hr />
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.OtherWork}
          </div>
          <br/>
          <ul>
            {JSONData.OtherWorkList.map(item => {
              return (
                <li
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: '400',
                    fontSize: 'medium',
                    lineHeight: '1.5',
                  }}
                >
                  <a target="_blank" href={item.link}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
          
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2 className="major">Education</h2>
          <span>
            <img
              src={JSONData.EducationImage}
              alt=""
              style={{
                width: '60%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </span>
          <br />
            {JSONData.EducationContent.map(item => {
              return (
                <div
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: '400',
                    fontSize: 'medium',
                    lineHeight: '1.5',
                  }}
                >
                  <br />
                  {item}
                </div>
              )
            })}
          <br />

          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={JSONData.WorkImage1} alt="" />
          </span>

          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.WorkContent1}
          </div>
          <br />

          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2
            style={{
              fontWeight: '700',
            }}
            className="major"
          >
            Resume
          </h2>
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.ResumeStartLine}
          </div>
          <br />
          <iframe src={JSONData.Resume} width="100%" height="75%"></iframe>
          <br />
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.ResumeAfterLine}
            <a target="_blank" href={JSONData.Resume}>
                      HERE
            </a>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Connect</h2>
          <ul className="icons">
            <li>
              <a
                target="_blank"
                href={JSONData.github}
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.linkedin}
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.emailid1}
                className="icon fa-envelope-open"
              >
                <span className="label">Personal Email</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.emailid2}
                className="icon fa-envelope-open"
              >
                <span className="label">GT Email</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.phone}
                className="icon fa-phone"
              >
                <span className="label">Phone</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
