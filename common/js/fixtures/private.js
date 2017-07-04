import mockUser from './mockUser';

const participants = [
  mockUser('rob'),
  mockUser('laura')
];

export const [rob, laura] = participants;

let messages = [
  {
    id: 1,
    sender: rob,
    recipient: laura,
    body: 'hey laura, do you have a sec?',
    timestamp: Date.now() - (60 * 1000 * 20)
  },
  {
    id: 2,
    sender: rob,
    recipient: laura,
    body: 'i wanted to ask you about the new designs',
    timestamp: Date.now() - (60 * 1000 * 20)
  },
  {
    id: 3,
    sender: laura,
    recipient: rob,
    body: 'sure, what\'s up?',
    timestamp: Date.now()
  }
];

// for (let i = 4; i < 15; i++) {
//   messages.push({
//     id: i,
//     sender: laura,
//     recipient: rob,
//     body: 'sure, what\'s up?',
//     timestamp: Date.now()
//   });
// }

export default {
  name: null,
  participants,
  type: 'private',
  messages
};
