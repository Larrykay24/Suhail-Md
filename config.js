const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://ep-empty-limit-a2m7pzrg.eu-central-1.pg.koyeb.app"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168929037";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_05_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxbnl1UDN2anFNWGYvQW1KUlNqeWpxSXZpdjQ4a3Vud0xxOXJXS0dkNzRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJcmEwLWFBdVNuZTFfNW5jYVFWNHVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3NTQwZDJlLWY2NGMtNGMxNC1iMDQwLTViYmJjMjczZDM5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA3OCxcbiAgICAgIDExNCxcbiAgICAgIDk1LFxuICAgICAgNixcbiAgICAgIDQ4LFxuICAgICAgMTM0LFxuICAgICAgNDIsXG4gICAgICAyNDksXG4gICAgICA0NixcbiAgICAgIDkwLFxuICAgICAgOTEsXG4gICAgICAxNCxcbiAgICAgIDIwMixcbiAgICAgIDIyMixcbiAgICAgIDIyNixcbiAgICAgIDYyLFxuICAgICAgNTgsXG4gICAgICA1LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMzIsXG4gICAgICAyNTUsXG4gICAgICAxMDUsXG4gICAgICAxNDYsXG4gICAgICAyMDcsXG4gICAgICAyMDMsXG4gICAgICAyMTYsXG4gICAgICAyMjYsXG4gICAgICA5NixcbiAgICAgIDE0MyxcbiAgICAgIDEzNyxcbiAgICAgIDI0NCxcbiAgICAgIDE0MixcbiAgICAgIDIzNSxcbiAgICAgIDE4MyxcbiAgICAgIDEyLFxuICAgICAgMTU4LFxuICAgICAgMTU4LFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIxTlA5Wk40XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY4OTI5MDM3OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjg3NTQ2MTM1NDcxNzc6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG1RZzdVSEVQZnRnYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJNTBaL0NCL3h4dWllQ0oxem93d1ZKWWs1U1Rjc2dsWFpTQUhRQ2NHbnk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZPdCs3YTRGTGNzaGVEd1RZMDAyRW5Iay90NUwrOWJJV0tkNGF1eGZNVjljU3JpRE1NZVNaVTRsR1JOMHQwVXgrYlIzYUkxUFpHVk9IOEU1YllPUUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBIZHBCaFE1UFYwWWJMWXdUTE80L21ETDg1N2J2WkRZcU0vS2RLSE9rcGJKaS9nRzBINEhVNXVMbytzWXhrZ1ErKzBqWXkvVGF4d2ppZkxpNk5SaGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjg5MjkwMzc6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Njk1MDk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnIwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4aUFNeUpzOU40bjk3OThxR25ydzQ4VGtOVlNoZXhWZEpKTUFUaTdBejZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTAyNDg1NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©larrykaydesigns" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Jarvis",
  ownername:process.env.OWNER_NAME|| "Larry",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
