import fetch from 'node-fetch';

export const notifiyOrder = (order, devices) => {
  const fromUserFullName = `${order.fromUser.name} ${order.fromUser.surname}`;

  const message = {
    'notification': {
      title: 'New pending order',
      body: `${fromUserFullName} has sent you a new order`,
    },
    'data': {
      'order': order.id,
      'click_action': 'FLUTTER_NOTIFICATION_CLICK'
    },
    'registration_ids': devices
  };

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.FIREBASE_MESSAGING_KEY}`
    },
    body: JSON.stringify(message)
  }).then(res => console.log(res))
    .catch(err => console.log(err));
};