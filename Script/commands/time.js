const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Saimx69x",
  description: "Fetches a stylish neon time card from API",
  commandCategory: "tools",
  usages: "time",
  cooldowns: 5,
};

module.exports.run = async function({ api, event }) {
  con)",
  description: "Fetches a stylish neon time card from API",
  commandCategory: "tools",
  usages: "time",
  cooldowns: 5,
};

module.exports.run = async function({ api, event }) {
  const { threadID, messageID } = event;
  try {
    const wait = await api.sendMessage("⚡ Fetching time card...", threadID, messageID);

    const apiUrl = "https://xsaim8x-xxx-api.onrender.com/aconst filePath = path.join(cacheDir, `time_${Date.now()}.png`);
    const writer = fs.(filePath);
    response.data.pipe(writer);

     new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    // Delete waiting message
    api.unsendMessage(wait.messageID);

    // Send the time card image
    return api.sendMessage(
      { attachment: fs.createReadStream(filePath) },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );

  } catch (err) {
    console.error("Time command error:", err);
    return api.sendMessage("❌ Failed to fetch time card.", threadID, messageID);
  }
};
me";
    const response = await axios.get(apiUrl, { responseType: "stream" });

    const cacheDir = path.join(__dirname, "cache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const filePath = path.join(cacheDir, `time_${Date.now()}.png`);
    const writer = fs.(filePath);
    response.data.pipe(writawait new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    // Delete waiting message
    api.unsendMessage(wait.messageID);

    // Send the time card image
    return api.sendMessage(
      { attachment: fs.createReadStream(filePath) },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );

  } catch (err) {
    console.error("Time command error:", err);
    return api.sendMessage("❌ Failed to fetch time card.", threadID, messageID);
  }
};

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    // Delete waiting message
    api.unsendMessage(wait.messageID);

    // Send the time card image
    return api.sendMessage(
      { attachment: fs.createReadStream(filePath) },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );

  } catch (err) {
    console.error("Time command error:", err);
    return api.sendMessage("❌ Failed to fetch time card.", threadID, messageID);
  }
};
(cacheDir)) fs.mkdirSync(cacheDir);

    const filePath = path.join(cacheDir, `time_${Date.now()}.png`);
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    // Delete waiting message
    api.unsendMessage(wait.messageID);

    // Send the time card image
    return api.sendMessage(
      { attachment: fs.createReadStream(filePath) },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );

  } catch (err) {
    console.error("Time command error:", err);
    return api.sendMessage("❌ Failed to fetch time card.", threadID, messageID);
  }
};
(filePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    // Delete waiting message
    api.unsendMessage(wait.messageID);

    // Send the time card image
    return api.sendMessage(
      { attachment: fs.createReadStream(filePath) },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );

  } catch (err) {
    console.error("Time command error:", err);
    return api.sendMessage("❌ Failed to fetch time card.", threadID, messageID);
  }
};
