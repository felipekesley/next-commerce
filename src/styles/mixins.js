import { css } from 'styled-components'

export const shadow = css`
	box-shadow: ${({ color }) =>
		`0px 4px 12px ${color || 'rgba(0, 0, 0, 0.08)'}`};
`

export const transition = css`
	transition: all 0.4s ease;
`
