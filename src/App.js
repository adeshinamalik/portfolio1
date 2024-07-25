import React from 'react';
// import './App.css';
import Images from './Images'; // Adjust the path if needed

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="wrapper header__wrapper">
          <a href="/" className="header__home">
            <img src={Images.favicon} alt="favicon" width="32" height="32" />
            adamkeyes
            <span className="visually-hidden">(to home page)</span>
          </a>
          <nav className="header__nav">
            <h2 className="visually-hidden">Navigation</h2>
            <a href="https://github.com/adeshinamalik" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.githubIcon} alt="GitHub" width="25" height="24" />
            </a>
            <a href="/" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.frontendMentorIcon} alt="Frontend Mentor" width="26" height="23" />
            </a>
            <a href="https://www.linkedin.com/in/malikatonda" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.linkedinIcon} alt="LinkedIn" width="25" height="24" />
            </a>
            <a href="https://x.com/Ahmed_malik19" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.twitterIcon} alt="Twitter" width="24" height="20" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="wrapper hero__wrapper bottom-border">
            <div className="hero__content">
              <picture>
                <source media="(min-width: 62.5em)" srcSet={Images.profileDesktop} />
                <source media="(min-width: 37.5em)" srcSet={Images.profileTablet} />
                <img
                  className="hero__image"
                  src={Images.profileMobile}
                  alt="Adam Keyes"
                  width="174"
                  height="383"
                />
              </picture>
              <img className="hero__rings" src={Images.patternRings} alt="" width="530" height="129" />
              <img className="hero__circle" src={Images.patternCircle} alt="" width="129" height="129" />
              <div className="hero__text">
                <h1 className="hero__headline header-xl">
                  Nice to
                  <br />
                  meet you! I'm <span>Adam Keyes</span>.
                </h1>
                <p className="hero__description">
                  Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
                </p>
                <a href="#contact" className="hero__contact underline">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="wrapper bottom-border">
            <h2 className="visually-hidden">Skills</h2>
            <div className="skills__content">
              <div className="skills__list">
                <div className="skill">
                  <h3 className="skill__name">HTML</h3>
                  <p className="skill__experience">4 Years Experience</p>
                </div>
                <div className="skill">
                  <h3 className="skill__name">CSS</h3>
                  <p className="skill__experience">4 Years Experience</p>
                </div>
                <div className="skill">
                  <h3 className="skill__name">JavaScript</h3>
                  <p className="skill__experience">4 Years Experience</p>
                </div>
                <div className="skill">
                  <h3 className="skill__name">Accessibility</h3>
                  <p className="skill__experience">4 Years Experience</p>
                </div>
                <div className="skill">
                  <h3 className="skill__name">React</h3>
                  <p className="skill__experience">3 Years Experience</p>
                </div>
                <div className="skill">
                  <h3 className="skill__name">Sass</h3>
                  <p className="skill__experience">3 Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects">
          <div className="wrapper bottom-border">
            <h2 className="projects__title header-l">
              Projects
              <a href="/" className="projects__link underline">
                Contact me
              </a>
            </h2>
            <ul className="projects__list">
              <li className="project">
                <h3 className="project__title header-m">
                  <a href="/" className="project__link">
                    Design portfolio
                  </a>
                </h3>
                <a href="/">
                  <img
                    className="project__image"
                    src={Images.project1Small}
                    alt="Design portfolio project"
                  />
                </a>
                <a href="/" className="project__link project__source underline">
                  View Project
                </a>
                <a href="/" className="project__link project__source underline">
                  View Code
                </a>
              </li>
              <li className="project">
                <h3 className="project__title header-m">
                  <a href="/" className="project__link">
                    E-learning landing page
                  </a>
                </h3>
                <a href="/">
                  <img
                    className="project__image"
                    src={Images.project2Small}
                    alt="E-learning landing page project"
                  />
                </a>
                <a href="/" className="project__link project__source underline">
                  View Project
                </a>
                <a href="/" className="project__link project__source underline">
                  View Code
                </a>
              </li>
              <li className="project">
                <h3 className="project__title header-m">
                  <a href="/" className="project__link">
                    Todo web app
                  </a>
                </h3>
                <a href="/">
                  <img
                    className="project__image"
                    src={Images.project3Small}
                    alt="Todo web app project"
                  />
                </a>
                <a href="/" className="project__link project__source underline">
                  View Project
                </a>
                <a href="/" className="project__link project__source underline">
                  View Code
                </a>
              </li>
              <li className="project">
                <h3 className="project__title header-m">
                  <a href="/" className="project__link">
                    Design portfolio
                  </a>
                </h3>
                <a href="/">
                  <img
                    className="project__image"
                    src={Images.project4Small}
                    alt="Design portfolio project"
                  />
                </a>
                <a href="/" className="project__link project__source underline">
                  View Project
                </a>
                <a href="/" className="project__link project__source underline">
                  View Code
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrapper">
            <h2 className="contact__title header-l">
              Get in Touch
            </h2>
            <form className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input type="text" id="name" name="name" className="contact__input" />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input type="email" id="email" name="email" className="contact__input" />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea id="message" name="message" rows="4" className="contact__textarea"></textarea>
              </div>
              <button type="submit" className="contact__button">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrapper footer__wrapper">
          <p className="footer__copyright">
            &copy; 2024 Adam Keyes. All rights reserved.
          </p>
          <nav className="footer__nav">
            <h2 className="visually-hidden">Social Media Links</h2>
            <a href="https://github.com/adeshinamalik" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.githubIcon} alt="GitHub" width="25" height="24" />
            </a>
            <a href="/" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.frontendMentorIcon} alt="Frontend Mentor" width="26" height="23" />
            </a>
            <a href="https://www.linkedin.com/in/malikatonda" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.linkedinIcon} alt="LinkedIn" width="25" height="24" />
            </a>
            <a href="https://x.com/Ahmed_malik19" target='_blank' rel="noreferrer" className="header__social">
              <img src={Images.twitterIcon} alt="Twitter" width="24" height="20" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
