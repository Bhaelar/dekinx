import React from 'react';

const SectionThree = () => {
  return (
    <div className="container-fluid section-three">
      <div className="row">
        <div className="grey-bg col-lg-8">
          <div className="row">
            <div className="border-w-end col-md-3 p-30w p-100y mr-3">
              <h5 className="p-90b s3-sm-header">CONTACTS</h5>
              <ul>
                <li className="p-60b s3-sm-text">+32 484 26 77 94</li>
                <li className="p-60b s3-sm-text">+32 484 26 77 94</li>
                <li className="s3-sm-text">info@spacex.com</li>
              </ul>
            </div>
            <div className="border-w-end col-md-3 p-30w p-100y mr-3">
              <h5 className="p-90b s3-sm-header">ABOUT</h5>
              <ul>
                <li className="p-60b s3-sm-text">About us</li>
                <li className="p-60b s3-sm-text">Careers</li>
                <li className="s3-sm-text">Shop</li>
              </ul>
            </div>
            <div className="border-w-end col-md-3 p-30w p-100y mr-3">
              <h5 className="p-90b s3-sm-header">SOCIAL MEDIA</h5>
              <ul>
                <li className="p-60b s3-sm-text">Facebook</li>
                <li className="p-60b s3-sm-text">Twitter</li>
                <li className="s3-sm-text">Vimeo</li>
              </ul>
            </div>
            <div className="col-md-3 p-30w p-100y">
              <h5 className="p-90b s3-sm-header">ROCKETS</h5>
              <ul>
                <li className="p-60b s3-sm-text">Falcon Heavy</li>
                <li className="p-60b s3-sm-text">Falcon 9</li>
                <li className="s3-sm-text">Falcon 1</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-60w p-100y">
          <h5 className="p-60b s3-sm-header">GET UPDATES</h5>
          <p className="s3-sm1-text p-60b">Subscribe and get updates about our rocket launches and everything around SpaceX</p>
          <p className="s3-sm1-text mb-3">Email</p>
          <form>
            <div className="row p-12l">
              <div className="col-10 input-email">
                <input type="email" className="form-control input-email-txt" id="exampleFormControlInput1" placeholder="example@impact.org" style={{borderColor: '#0865DE'}} />
              </div>
              <div className="col-2 input-email">
                <button className="btn btn-primary input-email-btn" type="submit">OK</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row footer p-60">
        <div className="col-md-8">
          <p className="s3-sm1-text" style={{color: '#959595'}}>© 2019 SPACE EXPLORATION TECHNOLOGIES CORP.</p>
        </div>
        <div className="col-md-4">
          <img src="/SpaceX-Logo.svg" className="float-right space-logo" alt="spacex-logo" />
        </div>
      </div>
    </div>
  )
}

export default SectionThree;
