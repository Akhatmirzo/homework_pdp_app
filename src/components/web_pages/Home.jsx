import React from 'react'
import { Link } from "react-router-dom";
import image from '../../assets/image';
import './homeStyle.css';

export const Home = () => {
    return (
        <div>
            <header class="navbar">
                <div class="container nav__wraper">
                    <Link href="/" class="logo">
                        <img src={image.logo} alt="navbar__logo"></img>
                        <span>Homework</span>
                    </Link>

                    <Link to='/login' class="btn">Sign in</Link>
                </div>
            </header>

            <main>
                <section class="hero__section">
                    <div class="container hero__wraper">
                        <div class="hero__content">
                            <h2 class="hero__title">
                                Manage Work
                                Like an Expert
                            </h2>

                            <p class="hero__info">
                                Homework is helping you to setting up the payroll without
                                required any finance skills or knowledge before
                            </p>

                            <Link to='/registration' class="btn btn__secondary">Get Started</Link>
                        </div>

                        <div class="hero__image">
                            <div class="heroImg"></div>

                            {/* <!-- ! Hero image elements --> */}
                            <div class="hero_img_el img_el1">
                                <div class="el__content">
                                    <img src={image.hero__imgIcon} alt="hero_img_el"></img>

                                    <div class="el_text">
                                        <h2>Analytics</h2>
                                        <p>Real time report</p>
                                    </div>
                                </div>

                                <div class="diagramma">
                                    <span class="diag_el"></span>
                                    <span class="diag_el"></span>
                                    <span class="diag_el"></span>
                                    <span class="diag_el"></span>
                                    <span class="diag_el"></span>
                                    <span class="diag_el"></span>
                                    <span class="diag_el"></span>
                                    <span class="diag_el bg-1"></span>
                                    <span class="diag_el bg-1"></span>
                                    <span class="diag_el bg-2"></span>
                                </div>
                            </div>
                            <div class="hero_img_el img_el2">
                                <div class="el__content">
                                    <img src={image.hero__imgIcon2} alt="hero_img_el"></img>

                                    <div class="el_text">
                                        <h2>Bulk Export</h2>
                                        <p>Work faster 200%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}