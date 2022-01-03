import axios from 'axios'

export const API_URL =
	'https://cors-resolve-app.herokuapp.com/https://json-server-store.herokuapp.com'

export const Http = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

// Valida o token de login

export const valid = async () => {
	const token = await localStorage.getItem('access_token')

	try {
		const response = await Http.post(
			'auth/valid',
			{},
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				}
			}
		)
		if (response.status === 200) {
			return
		}
	} catch (Error) {
		//console.log(Error)
		localStorage.removeItem('access_token')
		window.location.replace('login')
	}
}
