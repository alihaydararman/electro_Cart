import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className=''>
      <Header></Header>
      <div className='aboutus-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-6 col-xs-12 mb-5 mb-md-0'>
              <div className='aboutus'>
                <h2 className='aboutus-title'>About Us</h2>
                <p className='aboutus-text'>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in.
                </p>
                <p className='aboutus-text'>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                </p>
                <a className='aboutus-more' href='/'>
                  read more
                </a>
              </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 bfeatures p-sm-3 p-md-5'>
              <div className='feature'>
                <div className='feature-box'>
                  <div className='clearfix'>
                    <div className='iconset'>
                      <span className='glyphicon glyphicon-cog icon'></span>
                    </div>
                    <div className='feature-content'>
                      <h4>Work with heart</h4>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='feature-box'>
                  <div className='clearfix'>
                    <div className='iconset'>
                      <span className='glyphicon glyphicon-cog icon'></span>
                    </div>
                    <div className='feature-content'>
                      <h4>Reliable services</h4>
                      <p>
                        Donec vitae sapien ut libero venenatis faucibu. Nullam
                        quis ante. Etiam sit amet orci eget eros faucibus
                        tincidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className='feature-box'>
                  <div className='clearfix'>
                    <div className='iconset'>
                      <span className='glyphicon glyphicon-cog icon'></span>
                    </div>
                    <div className='feature-content'>
                      <h4>Great support</h4>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
