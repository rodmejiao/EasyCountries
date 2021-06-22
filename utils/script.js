
function ShowCountries(continent) {
    let continentSelected =continent.getAttribute(`data-continent`)
    console.log(continentSelected)
    const URL_API=`https://restcountries.eu/rest/v2/all`
    const URL_API_REGION=`https://restcountries.eu/rest/v2/region/${continentSelected}`
    let xhr=new XMLHttpRequest()
    xhr.open('GET',URL_API_REGION,true)
        xhr.onload=function () {
            if (xhr.status==200) {
                console.log(`success`)
                let countries=JSON.parse(this.response)
              /*let countriesByContinent=countries.filter(country => country.region==`Europe` ) */
                let mainCountries=document.getElementsByClassName(`countries`)[0]
                mainCountries.innerHTML=""
              /*countriesByContinent.forEach(country => { */
                    countries.forEach(country => {
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
