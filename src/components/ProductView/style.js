import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	position: relative;

	.icon {
		fill: ${({ theme }) => theme.colors.dark};
		width: 2.8rem;
	}

	.col-lg-5 {
		display: flex;
		align-items: center;
	}
`

export const Item = styled.div`
	display: block;
	width: 100%;
	padding: 3rem 0;
	background-color: ${({ theme }) => theme.colors.lightGray};
`

export const BoxImg = styled.div`
	width: 100%;
	position: relative;
	&:before {
		content: '';
		display: block;
		padding-top: 100%;
		width: 100%;
	}
`

export const BoxInfo = styled.div`
	width: 100%;
	position: relative;

	h3,
	h4 {
		margin-bottom: 1rem;
	}

	h6 {
		font-weight: normal;
		margin-bottom: 0.5rem;
	}

	p {
		color: ${({ theme }) => theme.colors.gray};
		margin-bottom: 2rem;
	}
`
