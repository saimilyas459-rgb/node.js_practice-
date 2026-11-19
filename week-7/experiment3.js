import { EventEmitter } from "events";

const orderEvents = new EventEmitter();

orderEvents.on("orderPlaced", (order) => {
    console.log("New order:", order.id);
});

orderEvents.on("orderPlaced", (order) => {
    console.log("Sending confirmation email...");
});

orderEvents.emit("orderPlaced", {
    id: 101
});