module.exports = {

    retrieveCity : () => {
        return async (dispatch) => {
            let key = '224c6e1fb07cc644b6602be6acc68c0b'
            let city = 'Lima'
            return await fetch(`https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, {
                    method: 'GET',
                })
                .then(res =>  res.json() )
                .then(data =>{
                    console.log(data)
                    // dispatch({
                    //     type: 'SEARCH_CITY',
                    //     city: data
                    // })
                })
                .catch(err => console.error(err)) 
        }
    },
}