import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	position: relative;

	.icon {
		fill: ${({ theme }) => theme.colors.dark};
		width: 1.8rem;
		cursor: pointer;
	}

	.table > tbody {
		vertical-align: middle;
	}

	.table > tr {
		text-align: left;
	}

	.table .center {
		text-align: center;
	}
`

export const Hr = styled.hr`
	border-color: ${({ theme }) => theme.colors.lightGray};
	margin: 2rem 0 4rem 0;
`

export const BgImg = styled.div`
	display: block;
	width: 100%;
	padding: 1rem 0;
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
