import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	position: relative;

	.icon {
		fill: ${({ theme }) => theme.colors.dark};
		width: 2.8rem;
	}
`
export const Box = styled.div`
	display: block;
	width: 100%;
	padding: 3rem 0;
	background-color: ${({ theme }) => theme.colors.lightGray};
`

export const Item = styled.div`
	width: 100%;
	position: relative;
	&:before {
		content: '';
		display: block;
		padding-top: 45%;
		width: 100%;
	}
`

export const Arrow = styled.button`
	border: 0;
	background: none;
	outline: none;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	z-index: 999;

	&.left {
		left: 1rem;
	}

	&.right {
		right: 1rem;
	}
`
