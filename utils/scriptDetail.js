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
            const COUNTRY_NAME=document.getElementsByClassName(`country-name`)[0]
            COUNTRY_NAME.textContent=country.name            

        }
    }
    xhr.send()

}();