const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("start", () => {
  console.log(" Start event touched");
});
emitter.emit("start");
