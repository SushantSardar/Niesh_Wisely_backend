const { Expo } = require("expo-server-sdk");
const CallModel = require("../../models/callModel");
const ClientModel = require("../../models/addClientListModel");

const expo = new Expo();

const addCall = async (req, res) => {
  try {
    const {
      productName,
      quantity,
      dealType,
      script,
      position,
      price1,
      price2,
      price3,
      target,
      stopLoss,
      description,
      uploadFile,
      pnl,
      statusValue,
    } = req.body;

    const newCall = await CallModel.create({
      productName,
      quantity,
      dealType,
      script,
      position,
      price1,
      price2,
      price3,
      target,
      stopLoss,
      description,
      uploadFile,
      pnl,
      statusValue,
    });

    if (newCall) {
      const clientsWithSameProduct = await ClientModel.find({
        'products': {
          $elemMatch: {
            'productName': productName,
            'serviceStatus': 'Active',
            'saStatus': 'Yes'
          }
        }
      });
      const deviceTokens = clientsWithSameProduct.map(
        (client) => client.deviceToken
      );

      const messages = deviceTokens
        .filter((pushToken) => Expo.isExpoPushToken(pushToken))
        .map((pushToken) => ({
          to: pushToken,
          sound: "default",
          title: `Niveshartha Recommendation`,
          body: ` ${dealType.toUpperCase()} - ${script.toUpperCase()} - ${position.toUpperCase()} - ${price1.toUpperCase()} - Target: ${target.toUpperCase()} - Stop Loss: ${stopLoss.toUpperCase()} 
          ${statusValue ? `Status: ${statusValue.toUpperCase()}` : ''}
        `,
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
      console.log("Device Tokens:", deviceTokens);
    }
    res.status(200).json({ message: "Call added successfully", newCall });
  } catch (error) {
    console.error("Call not added!!!", error);
    res.status(500).json({ error: "Call not added" });
  }
};

module.exports = addCall;
