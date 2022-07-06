//╔════════════════════════════════⚅
//╠ Recode By HirohitoXyz
//║════════════════════════════════⚅
//╠ Script Berasal dari sc Xeon Bot Inc. Cheems Bot MD3
//║════════════════════════════════⚅
//╠ Thank you to Lord Buddha, Family and Myself
//╚════════════════════════════════⚅

const axios = require('axios')
const cheerio = require('cheerio')

const covid = async () => {
const res = await axios.get(`https://www.worldometers.info/coronavirus/country/indonesia/`) 
const $ = cheerio.load(res.data)
hasil = []
a = $('div#maincounter-wrap')
kasus = $(a).find('div > span').eq(0).text()
kematian = $(a).find('div > span').eq(1).text() 
sembuh = $(a).find('div > span').eq(2).text() 
hasil.push({ kasus, kematian, sembuh}) 
return hasil
}


module.exports = { covid }