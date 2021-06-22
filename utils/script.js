
function ShowCountries() {
    const URL_API=`https://restcountries.eu/rest/v2/all`
    let xhr=new XMLHttpRequest()
    xhr.open('GET',URL_API,true)
        xhr.onload=function () {
            if (xhr.status==200) {
                console.log(`success`)
                let countries=JSON.parse(this.response)
                let countriesByContinent=countries.filter(country => country.region==`Europe` )
                let mainCountries=document.getElementsByClassName(`countries`)[0]
                countriesByContinent.forEach(country => {
                    const CARD= document.createElement(`div`)
                    const NAME_COUNTRY=document.createElement(`h2`)
                    const FLAG_COUNTRY=document.createElement(`img`)
                    CARD.classList.add(`card`)
                    NAME_COUNTRY.textContent=country.name
                    FLAG_COUNTRY.src=country.flag
                    CARD.appendChild(NAME_COUNTRY)
                    CARD.appendChild(FLAG_COUNTRY)
                    mainCountries.appendChild(CARD)
                });
            }

        }
    xhr.send()
}
