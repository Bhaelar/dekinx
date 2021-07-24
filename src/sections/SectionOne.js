import React from 'react';
import sample from '../video.mp4';
import {
  Navbar, Container, Nav
} from 'react-bootstrap';

const SectionOne = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="nav-div">
          <a className="navbar-brand" href="#">
            <img src="/SpaceX-Logo-White.svg" alt="spacex logo" className="space-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars toggler"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarCollapse">
            <ul className="d-flex navbar-nav ml-auto mb-2 mb-md-0">
              <li className="nav-item border-end">
                <a className="nav-link" href="#">VISION & MISSION</a>
              </li>
              <li className="nav-item border-end">
                <a className="nav-link" href="#">PROJETS</a>
              </li>
              <li className="nav-item border-end">
                <a className="nav-link" href="#">EQUIPE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video src={sample} autoPlay loop muted>
          </video>
        </div>
        <div className="header-content text-md-center">
          <h1>SMALLSAT RIDESHARE PROGRAM</h1>
        </div>
      </header>
    </div>
  );
}

export default SectionOne;
