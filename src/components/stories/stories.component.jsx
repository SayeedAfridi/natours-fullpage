import React from 'react'

import videom4 from '../../assets/video.mp4'
import videoweb from '../../assets/video.webm'
import nat8 from '../../assets/nat-8.jpg'

const Stories = () => (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop >
                <source src={videom4} type="video/mp4" />
                <source src={videoweb} type="video/webm" />
                Your browser is not supported
            </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                We make people genuinely happy
            </h2>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={nat8} alt="Person on a tour" className="story__img" />
                    <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">I had abest week ever with my family</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum recusandae, molestias animi explicabo nulla tenetur? Id quia qui sit ducimus voluptatum, laudantium fugiat autem adipisci consequatur iure ut, repudiandae. Quibusdam.
                        laudantium fugiat autem adipisci consequatur iure ut,repudiandae. Quibusdam.</p>
                </div>
            </div>
        </div>

        <div className="u-center-text u-margin-bottom-huge">
            <a href="/#" className="btn-text">Read all stories &rarr;</a>
        </div>
    </section>
)

export default Stories