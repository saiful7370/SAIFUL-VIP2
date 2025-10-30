module.exports.config = {
 name: "rules2",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Shahadat Islam + Edited by Saiful Islam",
 description: "Send group rules with auto group name",
 commandCategory: "information",
 usages: "rules2",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 try {
   // Get group info
   const threadInfo = await api.getThreadInfo(event.threadID);
   const groupName = threadInfo.threadName || "এই গ্রুপ";

   const message = `❐-আসসালামু আলাইকুম,🖤🌺
❐- ${groupName} এর কিছু 𝙍𝙐𝙇𝙀𝙎 আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানেন না তারা জেনে রাখেন⬅️
<------------------------------------------------->

০১) এডমিনের কথা শুনতে হবে ✅
০২) কারো ইনবক্সে মেসেজ দিয়ে বিরক্ত করা যাবে না ✅
০৩) অপ্রয়োজনীয় ট্যাগ বা সবাইকে বারবার mention করা যাবে না ! 🚫
০৪) নামাজের সময় গ্রুপ ৩০ মিনিট অফ রাখবেন✅
০৫) ১৮+ কোন পিক, ভিডিও বা কোন কথা বলা যাবে না। (admin & members)
০৬) নিজের ইউটিউব/পেজের লিংক দিয়ে স্প্যাম করলে KICK 🦵
০৭) অ্যাডমিনদের সম্মান করতে হবে 🛡️
০৮) কোনো ধর্ম বা জাতি নিয়ে কটাক্ষ করা যাবে না ❌
০৯) কোনো গ্রুপের লিংক দেওয়া যাবে না ✅
১০) রাত ১২টার পর শুধু ভদ্র ভাষায় মজা করা যাবে, অশ্লীলতা নয় 😌
<------------------------------------------------->
❖ কারও সমস্যা থাকলে সরাসরি 𝙰𝙳𝙼𝙸𝙽𝚂 দের ইনবক্স করুন 💌
❖ রুলস ভাঙলে আগে ওয়ার্নিং, পরে 😈

𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽: RX
𝙵𝙱 𝙻𝙸𝙽𝙺: https://www.facebook.com/rxabdullah0007

_সাথেই থাকুন 🌺—͟͟͞͞${groupName}🌸_

💖...........ধন্যবাদ সবাইকে...........💖`;

   return api.sendMessage(message, event.threadID);
 } catch (error) {
   console.error(error);
   return api.sendMessage("❌ দুঃখিত, কিছু সমস্যা হয়েছে।", event.threadID);
 }
};
