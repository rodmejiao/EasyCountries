const URL_STRING=window.location.href
const NEW_URL=new URL(URL_STRING)
const NAME_COUNTRY=NEW_URL.searchParams.get(`name`)
console.log(NAME_COUNTRY)

const ShowDataCOuntry=function name(params) {
    console.log(`el pais que va a ir es ${NAME_COUNTRY}`)
    const URL_API=`https://restcountries.eu/rest/v2/name/${NAME_COUNTRY}`
    console.log(URL_API)
    let xhr=new XMLHttpRequest()
    xhr.open(`GET`,URL_API,true)
    xhr.onload=function () {
        if (xhr.status===200) {
            console.log(`ta recontra bien`)
            let country=JSON.parse(xhr.response)[0]
            console.log(country)         
            const COUNTRY_FLAG=document.getElementsByClassName(`country-flag`)[0]
            const COUNTRY_NAME=document.getElementsByClassName(`country-name`)[0]
            const COUNTRY_CAPITAL=document.getElementsByClassName(`country-capital`)[0]
            const COUNTRY_ALTER_SPELLING=document.getElementsByClassName(`country-alter_spellling`)[0]
            const COUNTRY_REGION=document.getElementsByClassName(`country-region`)[0]
            const COUNTRY_SUBREGION=document.getElementsByClassName(`country-subregion`)[0]
            const COUNTRY_DEMONYN=document.getElementsByClassName(`country-demonym`)[0]
            const COUNTRY_POPULATION=document.getElementsByClassName(`country-population`)[0]
            const COUNTRY_TIMEZONES=document.getElementsByClassName(`country-TimeZones`)[0]            
            const COUNTRY_BORDERS=document.getElementsByClassName(`country-borders`)[0]
            const COUNTRY_LANGUAGES=document.getElementsByClassName(`country-languages`)[0]
            const COUNTRY_TRANSLATION=document.getElementsByClassName(`country-translations`)[0]
            COUNTRY_FLAG.style.backgroundImage=`url(${country.flag})`
            COUNTRY_NAME.textContent=`${country.name}`
            COUNTRY_CAPITAL.textContent=`${country.capital}`
            COUNTRY_ALTER_SPELLING.textContent=`alter spelling`
            COUNTRY_REGION.innerHTML+=`${country.region}`
            COUNTRY_SUBREGION.innerHTML+=`${country.subregion}`
            COUNTRY_DEMONYN.innerHTML+=`${country.demonym}`
            COUNTRY_POPULATION.innerHTML+=`${country.population}`
            COUNTRY_TIMEZONES.textContent=`timezones`
            COUNTRY_BORDERS.textContent=`borders`
            COUNTRY_LANGUAGES.textContent=`languajes`
            COUNTRY_TRANSLATION.textContent=`translation`
        }
    }
    xhr.send()

}();