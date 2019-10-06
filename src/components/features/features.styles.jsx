import styled from 'styled-components'
import nat4 from '../../assets/nat-4.jpg'

export const FeatureContainer = styled.div`
	padding: 20rem 0;
	height: 100vh;
	background-image: linear-gradient(to right bottom,
        rgba(126, 213, 111, 0.8),  
        rgba(40, 180, 133, 0.8)), 
        url(${nat4});
	background-size: cover;

	@include respond(tab-port) {
		padding: 10rem 0;
	}
`