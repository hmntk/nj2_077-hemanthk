const EventEmitter = require("events");

const { verifyEmail, welcomeEmail } = require("./sendEmails.js");

const eventEmitter = new EventEmitter();

const register = () => {
  eventEmitter.on("userRegistered", verifyEmail);
  eventEmitter.on("userRegistered", welcomeEmail);

  eventEmitter.emit("userRegistered", { email: "abc@email.com" });
};

register();
