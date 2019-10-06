import React from 'react'
import {FeatureContainer} from './features.styles'

const Features = () => (
    <FeatureContainer>
        <div class="row">
            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="icon-basic-world feature-box__icon"></i>
                    <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus, perspiciatis cupiditate!</p>
                </div>
            </div>

            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="icon-basic-compass feature-box__icon"></i>
                    <h3 class="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                    <p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus, perspiciatis cupiditate!</p>
                </div>
            </div>

            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="icon-basic-map feature-box__icon"></i>
                    <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                    <p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus, perspiciatis cupiditate!</p>
                </div>
            </div>

            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="icon-basic-heart feature-box__icon"></i>
                    <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                    <p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus, perspiciatis cupiditate!</p>
                </div>
            </div>
        </div>
    </FeatureContainer>
)


export default Features