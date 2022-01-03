import axios from 'axios'

export const mercadoPago = 'https://api.mercadopago.com/checkout/'

export const Http = axios.create({
	baseURL: mercadoPago,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const checkout = async () => {}
