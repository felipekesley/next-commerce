import { Http } from 'src/services/api'

export const register = async (data) => {
	try {
		const fields = {
			data
		}
		const response = await Http.post('auth/register', fields)
		console.log(response)
	} catch (Error) {
		//console.log(Error)
		//localStorage.removeItem('access_token')
		//window.location.replace('login')
	}
}
