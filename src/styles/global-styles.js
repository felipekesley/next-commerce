import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html{
		@media (max-width: 1199.92px) {
			font-size: 93.75%; // 16px
		}
		
		@media (max-width: 767.92px) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		font-family: ${({ theme }) => theme.fonts.font1};
	}

	/* Heading */

	h1{ font-size: ${({ theme }) => theme.sizes.h1} }
	h2{ font-size: ${({ theme }) => theme.sizes.h2} }
	h3{ font-size: ${({ theme }) => theme.sizes.h3} }
	h4{ font-size: ${({ theme }) => theme.sizes.h4} }
	h5{ font-size: ${({ theme }) => theme.sizes.h5} }
	h6{ font-size: ${({ theme }) => theme.sizes.h6} }
`
