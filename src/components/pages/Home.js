import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import classes from '../../styles/Home.module.css';
import useWindowDimensions from '../../utils/useWindowDimensions';
import smoothscroll from 'smoothscroll-polyfill';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';

const Home = () => {
    const { width } = useWindowDimensions();

    useEffect(() => {
        Prism.highlightAll();
        // Polyfill:
        smoothscroll.polyfill();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        // Scroll to top of page:
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.PageContainer}>
            <Helmet>
                <title>The Prisoner API</title>
            </Helmet>
            <Navbar />

            <section className={classes.HeroSectionDiv}>
                <div className={classes.Hero}>
                    <div className={classes.Overlay}></div>
                    <div className={classes.Content}>
                        <h1 className={classes.MainTitleText}>The Prisoner API</h1>
                        <p className={classes.LeadText}>
                            Make HTTP requests on The Prisoner television series (1967-1968).
                        </p>
                        <br />
                        <br />
                        <div className={classes.Buttons}>
                            <a
                                href={width < 768 ? '#docs2' : '#docs'}
                                className={`${classes.GetStarted} ${'hashed'}`}
                            >
                                Get Started
                            </a>
                            <p></p>
                            <a
                                href={width < 768 ? '#resources2' : '#resources'}
                                className={`${classes.GetStarted} ${'hashed'}`}
                            >
                                Resources
                            </a>
                        </div>
                        <div id='docs2'></div>
                    </div>
                </div>
                <div id='docs'></div>
            </section>

            <div className={classes.SectionsContainer}>
                <section className={classes.DocsContainer}>
                    <div>
                        <div>
                            <h1 className={classes.DocumentationText}>Documentation</h1>
                        </div>
                        <div>
                            <p>
                                Welcome to the Prisoner API. This documentation should
                                provide you with all the information you need to start making
                                your HTTP requests. This API is free. Feel free to use it in
                                your projects.
                            </p>
                            <br />

                            <h2 className={classes.Subheading}>Rate Limit</h2>
                            <p>
                                Although this API is free, there is a rate limit of 10,000
                                requests a day to prevent malicious activity. That means that if
                                you happen to reach that limit, you will receive a 429 status
                                code, after which you will be able to make requests again after
                                24 hours.
                            </p>
                            <br />

                            <h2 className={classes.Subheading}>Base Url</h2>
                            <p>
                                <pre>
                                    <code className='language-html'>{`https://the-prisoner-api.vercel.app/`}</code>
                                </pre>
                            </p>
                            <br />

                            <h2 className={classes.Subheading}>Episode Attributes</h2>

                            <div className={classes.TableContainer}>
                                <table>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                    <tr>
                                        <td>id</td>
                                        <td>integer</td>
                                        <td>Unique id per episode</td>
                                    </tr>
                                    <tr>
                                        <td>title</td>
                                        <td>string</td>
                                        <td>Episode title</td>
                                    </tr>
                                    <tr>
                                        <td>episode</td>
                                        <td>string</td>
                                        <td>Episode number</td>
                                    </tr>
                                    <tr>
                                        <td>directed_by</td>
                                        <td>string</td>
                                        <td>Episode director</td>
                                    </tr>
                                    <tr>
                                        <td>written_by</td>
                                        <td>array</td>
                                        <td>Episode writer(s)</td>
                                    </tr>
                                    <tr>
                                        <td>air_year</td>
                                        <td>string</td>
                                        <td>Original year episode aired</td>
                                    </tr>
                                    <tr>
                                        <td>air_date</td>
                                        <td>string</td>
                                        <td>Original air date</td>
                                    </tr>
                                    <tr>
                                        <td>wikipedia_storyline</td>
                                        <td>string</td>
                                        <td>Brief overview of episode from Wikipedia</td>
                                    </tr>
                                    <tr>
                                        <td>imdb_storyline</td>
                                        <td>string</td>
                                        <td>Brief overview of episode from IMDb</td>
                                    </tr>
                                    <tr>
                                        <td>cast</td>
                                        <td>string</td>
                                        <td>Episode actor</td>
                                    </tr>
                                    <tr>
                                        <td>guest_appearances</td>
                                        <td>array</td>
                                        <td>Episode guest actor(s)</td>
                                    </tr>
                                    <tr>
                                        <td>title_img</td>
                                        <td>string</td>
                                        <td>Title image from episode</td>
                                    </tr>
                                    <tr>
                                        <td>img</td>
                                        <td>string</td>
                                        <td>Image from episode</td>
                                    </tr>
                                    <tr>
                                        <td>wikipedia</td>
                                        <td>string</td>
                                        <td>Link to episode Wikipedia page</td>
                                    </tr>
                                    <tr>
                                        <td>imdb</td>
                                        <td>string</td>
                                        <td>Link to episode IMDb page</td>
                                    </tr>
                                    <tr>
                                        <td>trivia</td>
                                        <td>string</td>
                                        <td>Trivia from episode</td>
                                    </tr>
                                </table>
                            </div>
                            <br />

                            <h2 className={classes.Subheading}>Get all episodes</h2>
                            <p>Endpoint to retrieve information from all episodes.</p>
                            <p>
                                <pre>
                                    <code className='language-javascript'>{`/episodes`}</code>
                                </pre>
                            </p>
                            <br />

                            <p>The request for all of the episodes looks like this.</p>
                            <p>
                                <pre>
                                    <code className='language-javascript'>
                                        {`fetch('https://the-prisoner-api.vercel.app/episodes')
  .then(response => response.json())
  .then(json => console.log(json))
`}
                                    </code>
                                </pre>
                            </p>
                            <br />

                            <h2 className={classes.Subheading}>Get a single episode</h2>
                            <p>
                                Example request by episode id. In this example, episode with an
                                id of 1 is being requested.
                            </p>
                            <p>
                                <pre>
                                    <code className='language-javascript'>
                                        {`fetch('https://the-prisoner-api.vercel.app/episodes/1')
  .then(response => response.json())
  .then(json => console.log(json))
`}
                                    </code>
                                </pre>
                            </p>
                            <br />

                            <p>Running this script will return the following data.</p>
                            <p>
                                <pre>
                                    <code className='language-javascript'>
                                        {`{
    "id": 1,
    "title": "Arrival",
    "episode": "1",
    "directed_by": "Don Chaffey",
    "written_by": [
      "George Markstein",
      "David Tomblin"
    ],
    "air_year": "1967",
    "air_date": "09-29-1967",
    "wikipedia_storyline": "After waking up in the Village and discovering his captivity there, Number Six encounters a friend from the outside who may have a possible escape.",
    "imdb_storyline": "After resigning, a secret agent finds himself trapped in a bizarre prison known only as The Village.",
    "cast": "Patrick McGoohan",
    "guest_appearances": [
      "Guy Doleman",
      "George Baker",
      "Virginia Maskell",
      "Paul Eddington"
    ],
    "title_img": "https://i.postimg.cc/6544t2SP/01-arrival-title.png",
    "img": "https://i.postimg.cc/9050f1sN/01-arrival.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Arrival_(The_Prisoner)",
    "imdb": "https://www.imdb.com/title/tt0679174/",
    "trivia": "No 6 gives his birthdate and time as 4.31 am, 19th March, 1928 - which is exactly the same as Patrick McGoohan's."
}
`}
                                    </code>
                                </pre>
                            </p>

                        </div>
                    </div>
                    <div id='resources'></div>
                </section>

                <section className={classes.ResourcesContainer}>
                    <div>
                        <div>
                            <h1 className={classes.ResourcesText}>Resources</h1>
                        </div>
                        <div>
                            <p>
                                The Prisoner API comes with one common resource:
                            </p>

                            <div className={classes.TableContainer}>
                                <table className={classes.ResourceTable}>
                                    <tr className={classes.ResourceTr}>
                                        <td className={classes.ResourceTd}>
                                            <a href='https://the-prisoner-api.vercel.app/episodes'>
                                                /episodes
                                            </a>
                                        </td>
                                        <td className={classes.ResourceTd}>17 episodes</td>
                                    </tr>
                                </table>
                            </div>
                            <br />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
