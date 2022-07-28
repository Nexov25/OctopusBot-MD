//╔════════════════════════════════⚅
//╠ Recode By HirohitoXyz
//║════════════════════════════════⚅
//╠ Script Berasal dari sc Xeon Bot Inc. Cheems Bot MD3
//║════════════════════════════════⚅
//╠ Thank you to Lord Buddha, Family and Myself
//╚════════════════════════════════⚅

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.owner = ["6285773663007"] //ur owner number
global.ownername = "Dzk"
global.ytname = "YT: Ga Punya Gw" //ur yt chanel name
global.socialm = "Instagram: dzk_aufa" //ur github or insta name
global.location = "Indonesia, Jawa Barat, Karawang" //ur location

//bot body
global.botname = "OctopusBot Inc" //ur bot name
global.websitex = "https://youtu.be/xn9RatOrbuI" //ur website
global.vidmenu = fs.readFileSync("./OctopusMedia/video/thumb-anime.mp4") //gif and video menu
global.packname = "WhatsApp Bot"
global.author = "By Dzk"
global.themeemoji = "🗿"
global.reactmoji = "🥶"
global.ownertag = ['6281513947940'] //ur owner tag
global.ownernummenu = ['6281513947940'] //ur owner number in menu and all
global.watermark = "OctopusBot Inc." //ur watermark
global.botscript = "https://github.com/DGXeon/CheemsBot-MD3"
global.linkz1 = "https://chat.whatsapp.com/H4VWippJbISFfSFZKVTSz9"
global.linkz2 = "https://chat.whatsapp.com/H4VWippJbISFfSFZKVTSz9"

//Bot theme media
global.thum = fs.readFileSync("./OctopusMedia/theme/therme.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./OctopusMedia/theme/therme.jpg") //ur logo pic
global.err4r = fs.readFileSync("./OctopusMedia/theme/therme.jpg") //ur error pic
global.thumb = fs.readFileSync("./OctopusMedia/theme/therme.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//other
global.lolhuman = "Isi Api Key Ente"
global.sessionName = "nama-session-elu"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Selesai Bang. bayar 5k ya ( canda ngentd )',
    admin: 'hanya untuk admin bot',
    shutdowne: 'server bot berhasil di matikan',
    botAdmin: 'Bot Harus Jadi Admin Dulu',
    owner: 'hanya untuk owner bot',
    group: 'buat di grup ini cok',
    private: 'buat di obrolan pribadi ini cok',
    bot: 'cuma buat bot',
    wait: 'Oke Bro Dalam Proses',
    linkm: 'Mana Link Nya Ngentd',
    error: 'Error!',
    ban: 'Awokawokwokwok Mampus Di Banned Sama Admin',
    nsfw: 'Fitur Sange belum diaktifkan, silahkan hubungi admin untuk mengaktifkan',
    banChat: 'Bot di banned di grup ini, hubungi admin untuk Melepaskan Banned'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'zenzkey',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellowBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
