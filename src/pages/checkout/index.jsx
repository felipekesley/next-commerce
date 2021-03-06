import { useState } from 'react'
import { useRouter } from 'next/router'
// import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { Container, Heading, Row, Col } from 'src/components/All'
// import { ChangeCart } from '../../store/actions/cart.action'

import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	position: relative;
	padding-bottom: 10rem;

	.icon {
		fill: ${({ theme }) => theme.colors.dark};
		width: 1.8rem;
		cursor: pointer;
	}

	h5 {
		text-align: center;
		margin-bottom: 2rem;
	}

	input {
		margin-bottom: 1rem;
	}
`

export const Hr = styled.hr`
	border-color: ${({ theme }) => theme.colors.lightGray};
	margin: 2rem 0 4rem 0;
`

export const Flex = styled.div`
	display: flex;

	&.gap {
		gap: 1rem;
	}
`

const CheckoutPage = () => {
	const router = useRouter()

	const handleRegister = () => {
		router.push('/register')
	}

	// Validate react bootstrap
	const [validated, setValidated] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		if (form.checkValidity() === false) {
			e.stopPropagation()
		}

		setValidated(true)

		console.log(form)
	}

	return (
		<Content>
			<Container>
				<Heading type="h2">Checkout</Heading>
				<Hr />
				<Row>
					<Col size="col-lg-6 offset-lg-3 col-12">
						<Heading type="h5">please login to continue</Heading>
						<Form
							noValidate
							validated={validated}
							onSubmit={handleSubmit}
						>
							<Form.Control
								required
								type="email"
								placeholder="Email"
							/>
							<Form.Control
								required
								type="password"
								placeholder="Password"
							/>
							<Flex className="gap">
								<Button variant="dark" type="submit">
									Login
								</Button>
								<Button type="submit" onClick={handleRegister}>
									Register
								</Button>
							</Flex>
						</Form>
					</Col>
				</Row>
			</Container>
		</Content>
	)
}

export default CheckoutPage
