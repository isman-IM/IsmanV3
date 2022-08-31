const fs = require('fs')
const chalk = require('chalk')

// MAKASIHLAH KE BANG ZENZ :)
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// HMM UDAH FREE DECK
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// NAMBAH BOLEH HAPUS JANGAN -_-
global.owner = ['6282237949722','62895328935760','6285255312224']
global.premium = ['6282237949722']
global.packname = 'Botz WhatsApp'
global.author = 'Creator Isman'
global.sessionName = 'Isman'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/isman.jpg')
global.tutor = fs.readFileSync('./isman/intro.mp4')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
global.menu1 = fs.readFileSync('./menu/1.jpg')
global.menu2 = fs.readFileSync('./menu/2.jpg')
global.menu3 = fs.readFileSync('./menu/3.jpg')
global.menu4 = fs.readFileSync('./menu/4.jpg')
global.menu5 = fs.readFileSync('./menu/5.jpg')
global.menu6 = fs.readFileSync('./menu/6.jpg')
global.menu7 = fs.readFileSync('./menu/7.jpg')
global.menu8 = fs.readFileSync('./menu/8.jpg')
global.menu9 = fs.readFileSync('./menu/9.jpg')
global.menu10 = fs.readFileSync('./menu/10.jpg')
global.menu11 = fs.readFileSync('./menu/11.jpg')
global.menu12 = fs.readFileSync('./menu/12.jpg')
global.menu13 = fs.readFileSync('./menu/13.jpg')
global.menu14 = fs.readFileSync('./menu/14.jpg')
global.menu15 = fs.readFileSync('./menu/15.jpg')
global.menu16 = fs.readFileSync('./menu/16.jpg')
global.menu17 = fs.readFileSync('./menu/17.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
