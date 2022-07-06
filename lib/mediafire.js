//╔════════════════════════════════⚅
//╠ Recode By HirohitoXyz
//║════════════════════════════════⚅
//╠ Script Berasal dari sc Xeon Bot Inc. Cheems Bot MD3
//║════════════════════════════════⚅
//╠ Thank you to Lord Buddha, Family and Myself
//╚════════════════════════════════⚅

const axios = require('axios')
const cheerio = require('cheerio')

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}


module.exports = { mediafireDl }