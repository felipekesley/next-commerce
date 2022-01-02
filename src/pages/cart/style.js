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

	.table tr {
		text-align: left;
	}

	.table .td-img {
		min-width: 2rem;
	}

	.table .remove {
		width: 2.5rem;
	}

	.table .center {
		text-align: center;
	}
`

export const Hr = styled.hr`
	border-color: ${({ theme }) => theme.colors.lightGray};
	margin: 2rem 0 4rem 0;
`

export const Flex = styled.div`
	display: flex;
	justify-content: flex-end;
`
