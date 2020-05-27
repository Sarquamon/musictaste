import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* // <!-- Masthead--> */}
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                Your Favorite Source of Getting New Music
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                Start MusicTaste can help you find new and better music using
                the MusicTaste recommendation engine! Just register and start
                getting new music, no strings attached!
              </p>
              <Link
                className="btn btn-primary btn-xl js-scroll-trigger"
                to="/loginregister"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* // <!-- About--> */}
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you crave!</h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4">
                MusicTaste has everything you need to get your new music up and
                running in no time! Choose one of our options, free and easy to
                use! No strings attached!
              </p>
              <Link
                to="/loginregister"
                className="btn btn-light btn-xl js-scroll-trigger"
              >
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section bg-dark text-white" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="mb-5">
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
              <a className="d-block" href="mailto:technicalSalo@outlook.com">
                technicalSalo@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright © 2020 - MusicTaste
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
