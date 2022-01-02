import styled from 'styled-components'
import { transition } from 'src/styles/mixins'

export const Hamburger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 2.5rem;
	height: 1.5rem;
	border: 0;
	background: none;
	outline: none;
	cursor: pointer;

	&:hover {
		span {
			opacity: 0.7;
		}
	}

	&.active {
		span {
			&:nth-child(1) {
				width: 1.5rem;
				transform: rotate(-45deg) translate(-10px, 5px);
				transform-origin: center;
				@media (max-width: 575.92px) {
					transform: rotate(-45deg) translate(-9px, 5px);
				}
			}

			&:nth-child(2) {
				transform: none;
			}

			&:nth-child(3) {
				width: 1.5rem;
				transform: rotate(48deg) translate(-10px, -4px);
				transform-origin: center;
				@media (max-width: 575.92px) {
					transform: rotate(45deg) translate(-9px, -5px);
				}
			}
		}
	}
`

export const Span = styled.span`
	display: block;
	width: 100%;
	height: 2px;

	background-color: ${({ theme }) => theme.colors.dark};

	${transition};
`
