const { Expo } = require("expo-server-sdk");
const expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });
const expoTokenModel = require("../../models/notificationTokens/expoToken");

module.exports.sendPushNotifications = async function (req, res) {
  try {
    const allTokens = await expoTokenModel.find({});
    const tokenslist = allTokens.map((it) => it.tokens);
    // Inside sendPushNotifications function
    const messages = tokenslist
      .filter((pushToken) => Expo.isExpoPushToken(pushToken))
      .map((pushToken) => ({
        to: pushToken,
        sound: "default",
        title: req.body.title, // Use the received title from the frontend
        body: req.body.body, // Use the received body from the frontend
        data: { withSome: "data" },
      }));
    console.log(messages);

    const tickets = await expo.sendPushNotificationsAsync(messages);

    for (let ticket of tickets) {
      if (ticket.id) {
        continue;
      }

      if (ticket.details && ticket.details.error) {
        console.error(`Error sending notification: ${ticket.details.error}`);
      }
    }
    return tickets;
  } catch (error) {
    console.error("Error sending push notifications:", error);
    throw error;
  }
};

module.exports.getNotificationReceipts = async function (tickets) {
  let receiptIds = tickets
    .filter((ticket) => ticket.id)
    .map((ticket) => ticket.id);

  try {
    let receipts = await expo.getPushNotificationReceiptsAsync(receiptIds);
    console.log(receipts);

    for (let receiptId in receipts) {
      let { status, message, details } = receipts[receiptId];
      if (status === "ok") {
        continue;
      }

      if (status === "error") {
        console.error(`Error receiving notification receipt: ${message}`);
        if (details && details.error) {
          console.error(`The error code is ${details.error}`);
        }
      }
    }

    return receipts;
  } catch (error) {
    console.error("Error getting push notification receipts:", error);
    throw error;
  }
};
