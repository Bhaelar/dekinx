import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SectionTwo = () => {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches/past')
    .then(function (response) {
      // handle success
      console.log(response);
      let arr = [];
      for(let i = 0 ; i < response.data.length ; i++) {
        if(response.data[i].links.mission_patch && response.data[i].details)
          arr.push(response.data[i]);
        if(arr.length > 7)
          break;
      }
      setLaunches(arr);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
	}, []);
  console.log(launches);

  return (
  	<div className="container-fluid section-two">
  		<div className="text-md-center col-lg-8 s2-header mt-3">
  			<h1>
  				DEDICATED ESPA CLASS MISSIONS AS LOW AS $1M
  			</h1>
  		</div>
  		<div className="row p-30w">
  			<div className="col-md-6 p-30w">
  				<div className="s2-sm-header">
  					<h3>THE PROGRAM</h3>
  				</div>
  				<div className="s2-sm-text">
  					<p>
  					SpaceX’s SmallSat Rideshare Program will provide small satellite operators with regularly scheduled, dedicated Falcon 9 rideshare missions to sun synchronous orbit (SSO) for ESPA class payloads for as low as $1M per mission, which includes up to 200 kg of payload mass
  					</p>
  				</div>
  			</div>
  			<div className="col-md-6 p-30w">
  				<div className="s2-sm-header">
  					<h3>PAYLOADS</h3>
  				</div>
  				<div className="s2-sm-text">
  					<p>
  						For payloads who run into development or production challenges leading up to launch, SpaceX will allow them to apply 100% of monies paid towards the cost of rebooking on a subsequent mission, subject to a 10% rebooking fee.
  					</p>
  				</div>
  			</div>
  		</div>
      <div className="text-md-center col-lg-8 s2-header mt-3">
  			<h1>
  				OUR PAST LAUNCHES
  			</h1>
  		</div>
      <div className="row p-30w p-60b">
        {launches ? launches.map(launch => (
          <div className="col-lg-3 col-md-6 col-sm-12 p-10">
            <div className="card">
              <div className="card-img my-3" style={{backgroundImage: `url(${launch.links.mission_patch})`}}>
              </div>
              <div className="card-body">
                <p>
                  <span className="launch-details mission-name pr-3">{launch.mission_name}</span>
                  <span className="launch-details mission-year pr-3">{launch.launch_year}</span>
                  <span className="launch-details rocket-name">{launch.rocket.rocket_name}</span>
                </p>
                <p className="card-text">{launch.details.substring(0, 100)}</p>
                <p className="">
                  <span className="p-10r"><button type="button" className="btn btn-primary link-btn"><i className="fas fa-angle-right"></i></button></span>
                  <span className="wiki-link"><a href={launch.links.wikipedia}>Go to wikipedia page</a></span>
                </p>
              </div>
            </div>
          </div>
        )) : ''}
      </div>
  	</div>
  )
};

export default SectionTwo;
