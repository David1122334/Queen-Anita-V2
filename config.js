//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdmWENocmh2bFQvaXV3ZXorbVpEV0JtcXZORUF4ZEN0WlZLQ2RBeFBHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGs5UUFPUFg2R2tyNmpmTlNWNllLRnp2WGxack40U0lXTU45TCtTSEoxTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSE5WVndRK0Z3U3pKaWZlcStDRC9uR29vUWRpV2lncDR6Y3V1NDNkM0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTGZCYWY1MkVLUmNqT2VpTS9SaGZmb2szSUJlTGtPdEVxVWs1bXRVV2pRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJUHRXK0RDdU1YWEoya2NhYmdOVXNQWmlWVEZxV1VLRjZGTjhWTFh3VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJMcHpMdFMwYUczWDhsWjFmaTAzS3QwaXZLU1haQWdtTDljRlFIakN5eWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0F0MWVRcUtaaHp2c09HTVR4bll4ODR1YU0rTHlQK29meEt6dDdvNERuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkt6ZnZOWnNVekdRTXpBNGh5ejkyRXdwQXkrKzA5bHRabTlCeU90TitpRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZWSldSYVJJTnIvSTlOUTZ5blJ4TWw3NEsyakNCVlRZbDR0Wkk4eEc0cTBLZ2liVU5tRFFLdmtiSGYrckhyWFVCODY3a3hHZ2ZHNm9vY2ZxdVBzSUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJBeUlJdFVXdEJlNVJNRyt1dFd4N0tNUnhUaFFUL3FTck50UWxWTEZyUEVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNDE4NjE1NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTQxQURFRjk1RTNCRjQ2M0NGQjk3OEVBQzBBNTkwMDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTgwMDYxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0MTg2MTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QkYyMjFEQzNDNzQwRDIyQkMyMUVFOEFCQjgxOEFDNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1ODAwNjE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWWFJXUFFha1JBYWtDN2RTVHRpYjhBIiwicGhvbmVJZCI6IjJkMTY3MmMyLWMwMjgtNGNiMC04OTg0LTZkZjA4YjIyZDllYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MWlvWS8yRG9kOWFIRmpPU1htcUtkUCtLR009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVZoRnFHYVBOby9EZkhpQ2RjSTBQN0ZwUXBZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllTQ1FaRFlQIiwibWUiOnsiaWQiOiIyMzQ4MTQxODYxNTQyOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlIFN0YXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvcjI1VUJFSlBCOXJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh2NWZiMzVjU1llV3NJY2dZQjZKT1NhWWx1UUttVFpheW13WFV1MmRYVWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNWRGJDVjNpOGZBaGVDK2dBWFE0RGMzZ2gvQ0JramRNQzJIckNhZHlSNE9NNE9iL29HUmQ0UStsbkMzUnBRcC9JMmlJOVprT3JoSVQ5UFVLQkVwakNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVNUMrUEd0Y0c1UXBVV1NsWXVaa2dLU08rcDg2RHZycFpkVnczMFB3MEx2NTZkZGpsWHVVMFI4T1hzbXZoYnltaWgzTGJ1NG5XdDBFemJwYWZFMk9EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDE4NjE1NDI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNytYMjkrWEVtSGxyQ0hJR0FlaVRrbW1KYmtDcGsyV3Nwc0YxTHRuVjFKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1ODAwNjEyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFyLyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
