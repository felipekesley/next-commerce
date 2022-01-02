import * as Style from './style'

const Text = ({ children, align }) => {
	return (
		<Style.Paragraph className={`${align || 'default'}`}>
			{children}
		</Style.Paragraph>
	)
}

export default Text
