const URL_STRING=window.location.href
const NEW_URL=new URL(URL_STRING)
const NAME_COUNTRY=NEW_URL.searchParams.get(`name`)

const ShowDataCOuntry=function name() {
    console.log(`el pais que va es ${NAME_COUNTRY}`)
    const URL_API=`https://restcountries.eu/rest/v2/name/${NAME_COUNTRY}`
    let xhr=new XMLHttpRequest()
    xhr.open(`GET`,URL_API,true)
    xhr.onload=function () {
        if (xhr.status===200) {
            let country=JSON.parse(xhr.response)[0] 
            localStorage.setItem('country', JSON.stringify(country));  


            if(localStorage.getItem('country')){
                let pais=localStorage.getItem(`country`)
                let paisok=(JSON.parse(pais))
                const FLAG=document.getElementsByClassName(`flag`)[0]
                console.log(paisok.flag)
                FLAG.src=paisok.flag

              }else{
                const COUNTRY_FLAG=document.getElementsByClassName(`country-flag`)[0]
                const COUNTRY_NAME=document.getElementsByClassName(`country-name`)[0]
                const COUNTRY_CAPITAL=document.getElementsByClassName(`country-capital`)[0]
                const COUNTRY_REGION=document.getElementsByClassName(`country-region`)[0]
                const COUNTRY_SUBREGION=document.getElementsByClassName(`country-subregion`)[0]
                const COUNTRY_DEMONYN=document.getElementsByClassName(`country-demonym`)[0]
                const COUNTRY_POPULATION=document.getElementsByClassName(`country-population`)[0]
                const COUNTRY_LANGUAGES=document.getElementsByClassName(`country-languages`)[0]            
                const COUNTRY_BORDERS=document.getElementsByClassName(`country-borders`)[0]
                const COUNTRY_ALTER_SPELLING=document.getElementsByClassName(`country-alter_spellling`)[0]
                const COUNTRY_TIMEZONES=document.getElementsByClassName(`country-TimeZones`)[0]
                const COUNTRY_COURRENCIES=document.getElementsByClassName(`country-courrencies`)[0]
                const COUNTRY_TRANSLATION=document.getElementsByClassName(`country-translations`)[0]
    
                const COUNTRY_FLAG_IMAGE=document.createElement(`img`)
                COUNTRY_FLAG_IMAGE.src=country.flag
                COUNTRY_FLAG.appendChild(COUNTRY_FLAG_IMAGE)
              }




           /*  COUNTRY_NAME.textContent=`${country.name}`
            COUNTRY_CAPITAL.innerHTML+=`${country.capital}`
            COUNTRY_REGION.innerHTML+=`${country.region}`
            COUNTRY_SUBREGION.innerHTML+=`${country.subregion}`
            COUNTRY_DEMONYN.innerHTML+=`${country.demonym}`
            COUNTRY_POPULATION.innerHTML+=`${country.population}`


            let data_country_language=country.languages   
                data_country_language.forEach(language => {
                let newLanguage=document.createElement(`li`)
                newLanguage.innerHTML=language.name
                COUNTRY_LANGUAGES.appendChild(newLanguage)
                });

            let data_country_border=country.borders
            data_country_border.forEach(border => {
                let newBorder=document.createElement(`li`)
                newBorder.innerHTML=border
                COUNTRY_BORDERS.appendChild(newBorder)
            });

            let data_country_altSpellings=country.altSpellings
            data_country_altSpellings.forEach(altSpell => {
                let newAltSpell=document.createElement(`li`)
                newAltSpell.innerHTML=altSpell
                COUNTRY_ALTER_SPELLING.appendChild(newAltSpell)
            });

            let data_country_timezones=country.timezones
            data_country_timezones.forEach(timezone => {
                let newTimezone=document.createElement(`li`)
                newTimezone.innerHTML=timezone
                COUNTRY_TIMEZONES.appendChild(newTimezone)
            });

            let data_country_courrencies=country.currencies   
                data_country_courrencies.forEach(currency => {
                let newCourrency=document.createElement(`li`)
                newCourrency.innerHTML=`${currency.symbol} ${currency.code}`
                COUNTRY_COURRENCIES.appendChild(newCourrency)
            });

            Object.entries(country.translations).forEach(([key, value]) => {
                let newTranslation=document.createElement(`li`)
                newTranslation.innerHTML=`${key}: ${value}`
                COUNTRY_TRANSLATION.appendChild(newTranslation)
            }); */

        }
    }
    
    xhr.send()

}();