import styled from 'styled-components'
import hero from '../../assets/hero.jpg'
import heroSmall from '../../assets/hero-small.jpg'


export const Header = styled.div`
	height: 100vh;
	background-image: linear-gradient(to right bottom,
						rgba(126, 213, 111, 0.8),  
						rgba(40, 180, 133, 0.8)), 
						url(${heroSmall});
	background-size: cover; 
	background-position: top;
	position: relative;

	@media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),only screen and  (min-width: 125em),only screen and  (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em) {
		background-image: linear-gradient(to right bottom,
						rgba(126, 213, 111, 0.8),  
						rgba(40, 180, 133, 0.8)),
						url(${hero});
	}

`

export const Container = styled.div`
height:95vh;
padding: 30px;
`

export const logoBox = styled.div`
	position: absolute;
	top:  40px;
	left: 40px;
	.logo {
		height: 20px;
	}
` 

export const Logo = styled.img`
src:url(${props => props.src});
height: 35px;
`

export const TextBox = styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;

`
//.header {
	

	
// 	@supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
// 		height: 95vh;
// 		-webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
// 		clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
// 	}

	

	

	
// 	@include respond(phone) {
// 		-webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
// 		clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
// 	}
// 	&
// 	&__logo {
// 		height: 35px;
// 	}

// 	&__text-box {

// 	}

// }