import { useState } from 'react'
//import { useRouter } from 'next/router'
// import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { Container, Heading, Row, Col } from 'src/components/All'
import { Http } from 'src/services/api'
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
	const [validated, setValidated] = useState(false)
	const [formValues, setFormValues] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()

		// get values
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)
		console.log(data)

		// react bootstrap
		const form = e.currentTarget
		if (form.checkValidity() === false) {
			e.stopPropagation()
		} else {
			const register = async () => {
				try {
					const fields = {
						email: data.email,
						password: data.password
					}
					const response = await Http.post('auth/register', fields)
					console.log(response)
				} catch (Error) {
					console.log(Error)
					//localStorage.removeItem('access_token')
					//window.location.replace('login')
				}
			}
			register()
		}

		setValidated(true)
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
		//console.log(name, value)
	}

	return (
		<Content>
			<Container>
				<Heading type="h2">Register</Heading>
				<Hr />
				<Row>
					<Col size="col-lg-6 offset-lg-3 col-12">
						<Heading type="h5">Register to checkout</Heading>
						<Form
							noValidate
							validated={validated}
							onSubmit={handleSubmit}
						>
							<Form.Control
								required
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleInputChange}
							/>
							<Form.Control
								required
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleInputChange}
							/>
							<Flex className="gap">
								<Button variant="dark" type="submit">
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
