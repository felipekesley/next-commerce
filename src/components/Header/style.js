import styled from 'styled-components'
import { transition } from 'src/styles/mixins'

export const Header = styled.header`
	width: 100%;
	padding: 3rem 0 4rem 0;
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.icon {
		fill: ${({ theme }) => theme.colors.dark};
		width: 1.8rem;
		${transition};
	}
`

export const Logo = styled.div`
	display: block;
	font-weight: bold;
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.sizes.p};

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.dark};
	}
`

export const Box = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`

export const Account = styled.div`
	display: block;
`

export const Bag = styled.div`
	display: block;
	position: relative;
	cursor: pointer;
`

export const Quantity = styled.span`
	position: absolute;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.light};
	font-size: 0.7rem;
	top: -5px;
	right: -15px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Total = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.dark};
	font-weight: bold;
	margin-left: 1rem;
`
