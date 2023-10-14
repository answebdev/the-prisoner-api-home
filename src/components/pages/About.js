import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import classes from '../../styles/About.module.css';

const About = () => {
    useEffect(() => {
        // Polyfill:
        smoothscroll.polyfill();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        // Scroll to top of page:
        window.scrollTo(0, 0);
    });

    return (
        <div className={classes.PageContainer}>
            <Helmet>
                <title>The Twilight Zone API | About</title>
            </Helmet>

            <Navbar />

            <div className={classes.SectionsContainer}>
                <section className={classes.MainSection}>
                    <div>
                        <div>
                            <h1 className={classes.Heading}>About</h1>
                        </div>

                        <h2 className={classes.Subheading}>About Me</h2>
                        <p>
                            Hi there. I am a web developer in San Diego, California, and I
                            love building things for the web. Feel free to check out my&nbsp;
                            <a
                                className={classes.Link}
                                href='https://adolfschmuck.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                portfolio
                            </a>
                            &nbsp;for samples of my other projects and more.
                        </p>
                        <br />

                        <h2 className={classes.Subheading}>About the API</h2>
                        <p>
                            The Prisoner API is a collection of information based on The Prisoner television series (1967-1968).
                            I love The Prisoner, and I was unable to find a Prisoner
                            API with the information that I wanted, so I decided to create my
                            own. I designed this site in the hopes of making it easy for
                            developers to see what information is available for this API. The full documentation can be found in
                            the documentation section of the Home page.
                        </p>
                        <br />

                        <h2 className={classes.Subheading}>Copyright</h2>
                        <p>
                            I do not own the rights to any of the information or images
                            provided in this API. The Prisoner was created by Patrick McGoohan, with possible contributions from George Markstein,
                            and had its British premiere on September 29, 1967. The data collected
                            for this API came from{' '}
                            <a
                                className={classes.Link}
                                href='https://en.wikipedia.org/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Wikipedia
                            </a>
                            ,{' '}
                            <a
                                className={classes.Link}
                                href='https://www.imdb.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                IMDb
                            </a>
                            , and{' '}
                            <a
                                className={classes.Link}
                                href='https://prisoner.fandom.com/wiki/The_Prisoner_(1967_series)'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                The Prisoner Wiki
                            </a>. The image logo came from <a
                                className={classes.Link}
                                href='https://en.wikipedia.org/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Wikipedia
                            </a>.
                            The images come from screenshots taken from the episodes, and were re-sized in order to be
                            consistent with the image size across the collection. The images were then hosted in order to create their URLs.
                        </p>
                        <br />

                        <h2 className={classes.Subheading}>Issues</h2>
                        <p>
                            I did my best to double-check and triple-check the information in
                            the API. However, if you come across any errors or issues, feel
                            free to send me a&nbsp;
                            <a className={classes.Link} href='mailto:adolf.schmuck@gmail.com'>
                                message
                            </a>
                            &nbsp;to let me know. I will gladly correct any error or address
                            any issue as soon as I can.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;
