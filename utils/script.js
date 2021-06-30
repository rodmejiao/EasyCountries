
function ShowCountries(continent) {
    let continentSelected =continent


   /*  let continentSelected =continent.getAttribute(`data-continent`) */
    const URL_API=`https://restcountries.eu/rest/v2/all`
    const URL_API_REGION=`https://restcountries.eu/rest/v2/region/${continentSelected}`
    let xhr=new XMLHttpRequest()
    xhr.open('GET',URL_API_REGION,true)
        xhr.onload=function () {
            if (xhr.status==200) {
                let loader=document.getElementsByClassName(`loader`)[0]
                loader.style.display=`block`
                console.log(`loader start`)

                let countries=JSON.parse(this.response)
              /*let countriesByContinent=countries.filter(country => country.region==`Europe` ) */
                let mainCountries=document.getElementsByClassName(`countries`)[0]
                let continentName=document.createElement(`h2`)
                continentName.classList.add(`continent-name`)
                mainCountries.innerHTML=""
                continentName.textContent=continentSelected
                mainCountries.appendChild(continentName)
              /*countriesByContinent.forEach(country => { */
                    countries.forEach(country => {
                    const CARD= document.createElement(`div`)
                    const NAME_COUNTRY=document.createElement(`h2`)
                    const CONTAINER_FLAG_COUNTRY=document.createElement(`div`)
                    const FLAG_COUNTRY=document.createElement(`img`)
                    CARD.classList.add(`card`)
                    CONTAINER_FLAG_COUNTRY.classList.add(`container-flag`)   
                    NAME_COUNTRY.textContent=country.name
                    FLAG_COUNTRY.src=country.flag 

                    const CARD_INFO= document.createElement(`div`)
                    const CARD_INFO_NAME_COUNTRY=document.createElement(`h2`)
                    const CARD_INFO_CAPITAL_COUNTRY=document.createElement(`p`)
                    const CARD_INFO_CAPITAL_INFO=document.createElement(`a`)
                    CARD_INFO.classList.add(`card-info`)
                    CARD_INFO_NAME_COUNTRY.textContent=country.name
                    CARD_INFO_CAPITAL_COUNTRY.textContent=`Capital: ${country.capital}`
                    CARD_INFO_CAPITAL_INFO.textContent=`Show Data`
                    CARD_INFO_CAPITAL_INFO.href=`./countryDetail.html?name=${country.name}`

                    
                    CONTAINER_FLAG_COUNTRY.appendChild(FLAG_COUNTRY)
                    CARD.appendChild(CONTAINER_FLAG_COUNTRY)
                    CARD.appendChild(NAME_COUNTRY)
                    CARD_INFO.appendChild(CARD_INFO_NAME_COUNTRY)
                    CARD_INFO.appendChild(CARD_INFO_CAPITAL_COUNTRY)
                    CARD_INFO.appendChild(CARD_INFO_CAPITAL_INFO)
                    CARD.appendChild(CARD_INFO)
                    mainCountries.appendChild(CARD)
                    
                });
            }
            let loader=document.getElementsByClassName(`loader`)[0]
            loader.style.display=`none`
            console.log(`loader end`)
        }
    xhr.send()
}
