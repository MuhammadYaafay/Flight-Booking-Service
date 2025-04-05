const cron = require("node-cron");

const {BookingService} = require("../../services");

function scheduleCrons() {
  cron.schedule("*/30 * * * *", async () => {
    console.log("started", BookingService)
    const response = BookingService.cancelOldBookings();
    console.log(response);
  });
}

module.exports = scheduleCrons;
 