const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}