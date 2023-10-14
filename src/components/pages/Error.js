import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import spiral from '../../../src/img/bicycle.webp';
import classes from '../../styles/Error.module.css';

const Error = () => {
    return (
        <div className={classes.Error}>
            <Helmet>
                <title>The Prisoner API | Error</title>
                <style type='text/css'>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          letter-spacing: 1px;
          height: 100%;
        }
    `}</style>
            </Helmet>
            <header className={classes.AppHeader}>
                <img src={spiral} className={classes.AppLogo} alt='logo' />
                <p>404 Page Not Found</p>
                <p>
                    Sorry.
                    <br />
                    This page could not be found.
                </p>
                <div className={classes.Buttons}>
                    <Link className={classes.Safety} to='/'>
                        Go Back Home
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Error;
