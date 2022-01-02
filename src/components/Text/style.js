import styled from 'styled-components'

export const Paragraph = styled.p`
	font-size: ${({ theme }) => theme.sizes.p};
	margin-bottom: 1rem;
	line-height: 1.5rem;

	&.default {
		text-align: left;
	}

	&.center {
		text-align: center;
	}
`
