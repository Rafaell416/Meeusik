
const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=f9b2805b98e3ffad843baed8447843cd&format=json'

function getArtists () {
	return fetch(URL)
		.then(res => res.json())
		.then(data => {
			console.warn('DATA => ', data)
		})
		.catch(err => console.warn(err))
}

export  {getArtists}