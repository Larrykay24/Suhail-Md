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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_30_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVg1b29mVGJ2VW1uZ1p0bUhiRmlNdGZLWXQ5a3RkVjNGbGNwV2l5NzBMdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXhNUlhQZllRRXVjc0Z1XzRCRkUyZ1wiLFxuICBcInBob25lSWRcIjogXCJlYTljZmM3YS04MGNjLTQzY2YtODFkYi00OWQ0ODAzN2U2OGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgOTgsXG4gICAgICAxMDQsXG4gICAgICAyMzUsXG4gICAgICAxMjAsXG4gICAgICAyMzAsXG4gICAgICA2NCxcbiAgICAgIDE5OSxcbiAgICAgIDYsXG4gICAgICAyNDUsXG4gICAgICA5OCxcbiAgICAgIDExNCxcbiAgICAgIDY1LFxuICAgICAgMjEsXG4gICAgICAxNjAsXG4gICAgICA2OCxcbiAgICAgIDE4OCxcbiAgICAgIDEyNCxcbiAgICAgIDE1NSxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDk3LFxuICAgICAgMjQzLFxuICAgICAgMTU2LFxuICAgICAgNDAsXG4gICAgICA4NSxcbiAgICAgIDkwLFxuICAgICAgMTQyLFxuICAgICAgMjA4LFxuICAgICAgODAsXG4gICAgICAxNjksXG4gICAgICA1LFxuICAgICAgMTY0LFxuICAgICAgMzMsXG4gICAgICAxMDIsXG4gICAgICAyMjUsXG4gICAgICAxNjYsXG4gICAgICAxOTMsXG4gICAgICA5LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SjRaMkVDSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2ODkyOTAzNzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4NzU0NjEzNTQ3MTc3OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtUWc3VUhFUEhkZ2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSTUwWi9DQi94eHVpZUNKMXpvd3dWSllrNVNUY3NnbFhaU0FIUUNjR255ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvdVpCZEMxNGNKbjAyZFg4c0Z6SUFxbG9BL0ovb1cyVHBBanFPZUkyQTg0UHduSXFLUkRMUTdGS01vSnlsaFRjYmZKamNGVktrVzd4YXlRY1Ezcm9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIraHZmZ3h1a0VJWnBjRXZzb1VrTW5qa251cEJNREpWMkpDTE9OTThERkMvNWhpMEVhRHVTQjZub0hHOXFSek54d3QyanROdkl0cXNzdTg3UDRZUXBoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4OTI5MDM3OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY5MzA0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5yMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnIwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGlBTXlKczlONG45Nzk4cUducnc0OFRrTlZTaGV4VmRKSk1BVGk3QXo2dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkwMjQ4NTY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxNzUzNDY3MjJcIn0iCn0=" 


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
