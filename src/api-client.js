
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=f9b2805b98e3ffad843baed8447843cd&format=json'

function getArtists () {
	return fetch(URL)
		.then(res => res.json())
		.then(data => data.topartists.artist)
		.then(artist => artist.map(artist => {
			return {
				id: artist.mbid,
				name: artist.name,
				image: artist.image[3]['#text'],
				likes: 200,
				comments: 20
			}
		}))
		.catch(err => console.warn(err))
}

export  { getArtists }