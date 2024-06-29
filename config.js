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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_27_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1NZ21PNTd3R3dwTE5KOWZsRVl5Wm9hUEltaEdiQmlkRE9VS0t4T3RXZ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJfQjlXNU5HUW1Dc1hObVJseXRkQXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODU3ODBhYzEtOWExNi00YjZmLTk0ZDUtOTdhYjA5OWU1ZmM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDIxOSxcbiAgICAgIDU0LFxuICAgICAgMTAyLFxuICAgICAgMTAxLFxuICAgICAgMTc4LFxuICAgICAgMTQwLFxuICAgICAgMzgsXG4gICAgICA3NSxcbiAgICAgIDgxLFxuICAgICAgMjQyLFxuICAgICAgMTE0LFxuICAgICAgNyxcbiAgICAgIDI1MSxcbiAgICAgIDIzOSxcbiAgICAgIDI0NyxcbiAgICAgIDE3NSxcbiAgICAgIDE3MSxcbiAgICAgIDE2NSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDEzOSxcbiAgICAgIDU0LFxuICAgICAgMjM4LFxuICAgICAgMixcbiAgICAgIDIzNCxcbiAgICAgIDE3NixcbiAgICAgIDE0NixcbiAgICAgIDEyNixcbiAgICAgIDE0LFxuICAgICAgMTE0LFxuICAgICAgMTEsXG4gICAgICAwLFxuICAgICAgMjAyLFxuICAgICAgNjIsXG4gICAgICAxMDMsXG4gICAgICAxNTEsXG4gICAgICAyMzQsXG4gICAgICA3MSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyODJLNFQ3Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2ODkyOTAzNzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4NzU0NjEzNTQ3MTc3OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxUWc3VUhFTGI0Z2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSTUwWi9DQi94eHVpZUNKMXpvd3dWSllrNVNUY3NnbFhaU0FIUUNjR255ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3Tkp0emFZVm5jN3V4dlUvTlBoWDBqZUhqUW0ybzV2R3BGWHpyQ3c3MHdzQTU2UTAyY0JrcXRBamVXSjQ2bG04ZFRVVTRuZ3ZIVHdPN3dJU1plUTNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOZ2xVVTU2NDRENmF0bUpGRDM4R2k5UjNjamxBaUVXbGJVZTgxdTdONWlhWHhTZlBPa2Zpbk11Nk1vNER5TitTbko2MjREdGZvcS83RXAwNnRxdHRqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4OTI5MDM3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY5NjQ0MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="


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
