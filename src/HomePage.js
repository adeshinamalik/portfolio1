import React from 'react'
import './App.css'
import './MainPage.css'
import Images from './Images'
import { useState } from 'react'
import { saveMessage } from './components/MessageService'


const HomePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsSent(false);

        try {
            await saveMessage(name, email, message);
            setIsSent(true);
        } catch (error) {
            setIsSent(false);
        } finally {
            setIsSending(false);
        }

        setName('');
        setEmail('');
        setMessage('');
    };





    return (
        <div>
            <div className='main-sec hero'>
                <header class="container">
                    <div class="page-header">
                        <div class="logo">
                            <a href="1/">malikahmed.</a>
                        </div>
                        <input type="checkbox" id="click" />

                        <label for="click" class="mainicon">
                            <div class="menu">
                                <i class='bx bx-menu'></i>
                            </div>
                        </label>
                        <ul>
                            <li><a href="/" className="active" style={{ '--navAni': 1 }}>Home</a></li>
                            {/* <li><a href="2/" style={{ '--navAni': 2 }}>About</a></li> */}
                            <li><a href="#skills" style={{ '--navAni': 3 }}>Skills</a></li>
                            <li><a href="#projects" style={{ '--navAni': 4 }}>Projects</a></li>
                            <li><a href="#contact" style={{ '--navAni': 5 }}>Contact</a></li>
                        </ul>
                        {/* <label class="mode">
                            <input type="checkbox" id="darkModeToggle" />
                            <i class='bx bxs-moon'></i>
                        </label> */}
                    </div>
                </header>


                <section class="container">
                    <div class="main">
                        <div class="detail">
                            <h3>Hi, It's Me</h3>
                            <h1>I'm <span style={{ color: "#f9532d" }}>Malik Ahmed</span></h1>
                            <p>I'm a Frontend Web Developer based in Lagos. With over 2 years of experience in creating responsive, user-friendly web applications, I specialize in React.js and have a strong background in Mechatronics Engineering. Explore my portfolio to see my work and get to know more about my skills and projects.
                            </p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/malikatonda" target='_blank' style={{ '--socialAni': 1 }}><i className='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/malikahmed106/" target='_blank' style={{ '--socialAni': 2 }}><i className='bx bxl-instagram'></i></a>
                                <a href="https://github.com/adeshinamalik" target='_blank' style={{ '--socialAni': 3 }}><i className='bx bxl-github'></i></a>
                                <a href="https://x.com/Ahmed_malik19/" target='_blank' style={{ '--socialAni': 4 }}><i className='bx bxl-twitter'></i></a>
                            </div>
                            <a href="#contact" class="hero__contact underline">Contact me</a>
                        </div>
                        <div class="img-sec">
                            <div class="images">
                                <div className='image-container'>
                                    <img src={Images.profileImage} alt="" class="img-w" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <hr />
            </div >




            <main id="main">
                <section id='skills' class="skills">
                    <h2 class="projects__headline header-xl ">Skills</h2>
                    <div class="wrapper skills__wrapper bottom-border">
                        <div class="skills__item">
                            <img src={Images.htmlicon} alt='skills' />
                            {/* <h3 class="skills__title">HTML</h3> */}
                            <p class="skills__description">2 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.css3icon} alt='skills' />
                            {/* <h3 class="skills__title">CSS</h3> */}
                            <p class="skills__description">2 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.bootstrapicon} alt='skills' />
                            {/* <h3 class="skills__title">JavaScript</h3> */}
                            <p class="skills__description">2 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.sassicon} alt='skills' />
                            {/* <h3 class="skills__title">Sass</h3> */}
                            <p class="skills__description">1 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.javascripticon} alt='skills' />
                            {/* <h3 class="skills__title">JavaScript</h3> */}
                            <p class="skills__description">2 Years Experience</p>
                        </div>

                        <div class="skills__item">
                            <img src={Images.reacticon} alt='skills' />
                            {/* <h3 class="skills__title">React</h3> */}
                            <p class="skills__description">2 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.typescripticon} alt='skills' />
                            {/* <h3 class="skills__title">React</h3> */}
                            <p class="skills__description">1 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.reduxicon} alt='skills' />
                            {/* <h3 class="skills__title">React</h3> */}
                            <p class="skills__description">1 Years Experience</p>
                        </div>
                        <div class="skills__item">
                            <img src={Images.graphqlicon} alt='skills' />
                            {/* <h3 class="skills__title">React</h3> */}
                            <p class="skills__description">1 Years Experience</p>
                        </div>
                        <div class="skills__item iotskill">
                            <h3 class="skills__title ">IoT system integration</h3>
                            <p class="skills__description">2 Years Experience</p>
                        </div>
                    </div>
                    {/* <img
                        class="skills__rings"
                        src="/assets/images/pattern-rings.svg"
                        alt=""
                        width="530"
                        height="129"
                    /> */}
                </section>

                <section id='projects' class="projects">
                    <div class="wrapper projects__wrapper lawpress">
                        <div class="projects__grid">
                            <h2 class="projects__headline header-xl">Projects</h2>
                            <a href="/#contact" class="projects__contact underline"
                            >Contact me</a
                            >

                            <div class="projects__item">
                                <picture class="projects__picture">
                                    {/* <source
                                        media="(min-width: 62.5em)"
                                        srcset={Images.lawpressImg}
                                    /> */}
                                    <img
                                        class="projects__image"
                                        src={Images.lawpressImg}
                                        alt="screenshot of design portfolio website"
                                        width-="343"
                                        height="253"
                                    />
                                </picture>
                                <h3 class="projects__name">university of ilorin lawpress website</h3>
                                <p class="projects__tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>REACT</span>
                                    <span>FIREBASE</span>
                                </p>
                                <div class="projects__links">
                                    <a href="https://adeshinamalik.github.io/unilorin-law-press/" target='_blank' class="underline">View Project</a>
                                    <a href="https://github.com/adeshinamalik/unilorin-law-press" target='_blank' class="underline">View Code</a>
                                </div>
                            </div>

                            <div class="projects__item">
                                <picture class="projects__picture">
                                    {/* <source
                                        media="(min-width: 62.5em)"
                                        srcset="/assets/images/thumbnail-project-2-large.webp"
                                    /> */}
                                    <img
                                        class="projects__image"
                                        src={Images.homeListImg}
                                        alt="screenshot of learning platform website with different courses"
                                        width-="343"
                                        height="253"
                                    />
                                </picture>
                                <h3 class="projects__name">REAL ESTATE WEBSITE</h3>
                                <p class="projects__tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>REACT</span>
                                    <span>FIREBASE</span>
                                </p>
                                <div class="projects__links">
                                    <a href="https://github.com/adeshinamalik/Homelist" target='_blank' class="underline">View Project</a>
                                    <a href="https://github.com/Adesanya-Boluwatito/Hostel-app" target='_blank' class="underline">View Code</a>
                                </div>
                            </div>

                            <div class="projects__item">
                                <picture class="projects__picture">
                                    {/* <source
                                        media="(min-width: 62.5em)"
                                        srcset="/assets/images/thumbnail-project-3-large.webp"
                                    /> */}
                                    <img
                                        class="projects__image"
                                        src={Images.poultryManagerImg}
                                        alt="screenshot of To Do App showing a list of active and complete tasks"
                                        width-="343"
                                        height="253"
                                    />
                                </picture>
                                <h3 class="projects__name">IOT BASED POULTRY MANAGEMENT SYSTEM</h3>
                                <p class="projects__tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>REACT</span>
                                    <span>FIREBASE</span>
                                    <span>C++</span>
                                    <span>C++</span>
                                    <span>arduino</span>
                                    <span>C++</span>
                                </p>
                                <div class="projects__links">
                                    <a href="https://adeshinamalik.github.io/poultrymanagementsystem/" target='_blank ' class="underline">View Project</a>
                                    <a href="https://github.com/adeshinamalik/iot-based-poultry-management-system" target='_blank' class="underline">View Code</a>
                                </div>
                                <div>Developed an automated system to monitor and regulate feed, water, and environmental conditions using smart sensors and microcontrollers.</div>
                            </div>

                            <div class="projects__item">
                                <picture class="projects__picture">
                                    {/* <source
                                        media="(min-width: 62.5em)"
                                        srcset="/assets/images/thumbnail-project-4-large.webp"
                                    /> */}
                                    <img
                                        class="projects__image"
                                        src={Images.multiformImg}
                                        alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
                                        width-="343"
                                        height="253"
                                    />
                                </picture>
                                <h3 class="projects__name">MULTI STEP FORM</h3>
                                <p class="projects__tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>REACT</span>
                                    <span>FIREBASE</span>                                </p>
                                <div class="projects__links">
                                    <a href="/" class="underline">View Project</a>
                                    <a href="/" class="underline">View Code</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                <section id="contact" class="contact bg-less-dark">
                    <div class="wrapper contact__wrapper bottom-border">
                        <div class="contact__text">
                            <h2 class="contact__headline header-xl">Contact</h2>
                            <p class="contact__description">
                                If you have any questions, want to collaborate, or just want to say hi, feel free to reach out
                            </p>
                        </div>
                        <form class="contact__form" onSubmit={handleSubmit}>
                            <div class="contact__control">
                                <label for="name" class="visually-hidden">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {/* <img
                                    src="/assets/images/icon-invalid.svg"
                                    alt=""
                                    class="contact__invalid-icon"
                                    width="24"
                                    height="24"
                                /> */}
                            </div>
                            <div class="contact__control">
                                <label for="email" class="visually-hidden">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {/* <img
                                    src="/assets/images/icon-invalid.svg"
                                    alt=""
                                    class="contact__invalid-icon"
                                    width="24"
                                    height="24"
                                /> */}
                            </div>
                            <div class="contact__control">
                                <label for="message" class="visually-hidden">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="3"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div class="contact__control align-right">
                                <button type="submit" disabled={isSending}>
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {isSent && <p className="contact__success">Message sent successfully!</p>}
                        </form>
                    </div>
                    {/* <img
                        class="contact__rings"
                        src={Images.homesvg1}
                        alt=""
                        width="530"
                        height="129"
                    /> */}
                </section>
            </main>
            <footer class="footer bg-less-dark">
                <h2 class="visually-hidden">Footer</h2>
                <div class="wrapper">
                    <nav class="header__nav">
                        <h2 class="visually-hidden">Navigation</h2>
                        <a href="/" class="header__home">
                            malikahmed
                            <span class="visually-hidden">(to home page)</span>
                        </a>
                        <a href="https://github.com/adeshinamalik" target='_blank' class="header__social">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                aria-labelledby="socialGitHub"
                                role="img"
                            >
                                <title id="socialGitHub">GitHub</title>
                                <path
                                    fill="#FFF"
                                    fill-rule="evenodd"
                                    d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                                />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/malikatonda" target='_blank' class="header__social">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                aria-labelledby="socialLinkedIn"
                                role="img"
                            >
                                <title id="socialLinkedIn">LinkedIn</title>
                                <path
                                    fill="#FFF"
                                    fill-rule="evenodd"
                                    d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                                />
                            </svg>
                        </a>
                        <a href="https://x.com/Ahmed_malik19/" target='_blank' class="header__social">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="20"
                                aria-labelledby="socialTwitter"
                                role="img"
                            >
                                <title id="socialTwitter">Twitter</title>
                                <path
                                    fill="#FFF"
                                    d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
                                />
                            </svg>
                        </a>
                    </nav>
                </div>
            </footer>

        </div>
    )
}

export default HomePage