const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/E3WLNO4GSPOHA1";
global.website=process.env.GURL || "https://wa.me/message/E3WLNO4GSPOHA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_30_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRmgvRU5hbE5Vbys0aW8waitXQUlHRStRTkxHUy81N1N1TjBDS2J5Ly9qND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQwOTgyNjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMzMxRTM5NDVBMjY3QjlBMUJBNjQ5NTRERjQ4QTZERlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MzQyNDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3RSTzI2QlNSQkdHdXI1ZWFvVVZyZ1wiLFxuICBcInBob25lSWRcIjogXCJiODI0MzExYS1lZjQxLTQ3MWUtOTY2NS1lYTAwYzAxZTM5MTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTk1LFxuICAgICAgMTM3LFxuICAgICAgMjIyLFxuICAgICAgOTQsXG4gICAgICAxMTcsXG4gICAgICAxMjEsXG4gICAgICA5LFxuICAgICAgMjQwLFxuICAgICAgMjQxLFxuICAgICAgMjMsXG4gICAgICA5OCxcbiAgICAgIDIyNSxcbiAgICAgIDEzNixcbiAgICAgIDE2NCxcbiAgICAgIDIyNSxcbiAgICAgIDc3LFxuICAgICAgMjMzLFxuICAgICAgMjAxLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMTU4LFxuICAgICAgMTE5LFxuICAgICAgMzksXG4gICAgICAxMDIsXG4gICAgICAzMCxcbiAgICAgIDE5NixcbiAgICAgIDE1NixcbiAgICAgIDQ4LFxuICAgICAgMjI3LFxuICAgICAgMTY5LFxuICAgICAgMjMwLFxuICAgICAgMTI5LFxuICAgICAgODIsXG4gICAgICAxNSxcbiAgICAgIDU0LFxuICAgICAgMjA3LFxuICAgICAgMzIsXG4gICAgICAxMDksXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNFdTQUU1U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDk4MjY4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTU1OTc0NTEwMTg0MjozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1pc3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL3hnL01ERVBtZnRiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZRSEowWk1aclYyZWtqdkhIKy9pbUNGQmx0bVhRUFpTRXJBV2psWTBnRmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2VSeWVIdmxTYllrV0pVK0xEV0sraWdwWXQ0SEt3QUdCMC91OUR4MDIxM0VFUkloakpudGk2eTg2RUlxekg2UmhkWVdHVWRiWHV5OVdEN04xcUZHQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielpVVEhseEIzN3Y3cWYwNUxyL0xSWFUvNm9LWFdVSW1jaE9XdmpFcFlibkw1bTd1ZVdEOEtFbUlEcjRnRUJOa2czaS9nSFJQM0ZEMXhpQ3dFMUM2anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDk4MjY4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MzQyMzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNXFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU1cS5qc29uIjogIntcImtleURhdGFcIjpcIkU3QkRzeDJoVWplZ21ZQnVqMjVpQnZDRUpLY2ZISUllaWxsMzk4TjhkUG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0NjU0MjU5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjM0MjQwMjAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


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
  
