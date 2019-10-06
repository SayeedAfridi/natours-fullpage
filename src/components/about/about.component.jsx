import React from 'react'
import nat1 from '../../assets/nat-1-large.jpg'
import nat2 from '../../assets/nat-2-large.jpg'
import nat3 from '../../assets/nat-3-large.jpg'

const About = () => (
    <div>
    <div className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Exciting tours for adventarous people
            </h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to in love with nature</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nulla quos. Unde molestias beatae, harum rem! Blanditiis, expedita quod minus quia non a asperiores suscipit facere, doloribus, accusamus quasi debitis!</p>
                <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you never have before</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nulla quos. Unde molestias beatae, harum rem! Blanditiis</p>

                <a href="/#" className="btn-text">Learn more &rarr;</a>
            </div>
            <div className="col-1-of-2">
                <div className="composition">

                    <img alt="Nat 1"  className="composition__photo composition__photo--p1" src={nat1} />
                    <img alt="Nat 2" className="composition__photo composition__photo--p2" src={nat2} />
                    <img alt="Nat 3" className="composition__photo composition__photo--p3" src={nat3} />

                </div>
            </div>
        </div>
    </div>
    </div>
)

export default About