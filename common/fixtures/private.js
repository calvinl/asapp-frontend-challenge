import createUser from './createUser';

const participants = [
  createUser('rob'),
  createUser('laura')
];

export const [rob, laura] = participants;

export default {
  id: 1,
  name: null,
  participants,
  type: 'private',
  messages: [
    {
      id: 1,
      sender: rob,
      recipient: laura,
      body: 'hey laura, do you have a sec?',
      timestamp: Date.now()
    },
    {
      id: 2,
      sender: rob,
      recipient: laura,
      body: 'i wanted to ask you about the new designs',
      timestamp: Date.now()
    },
    {
      id: 3,
      sender: laura,
      recipient: rob,
      body: 'sure, what\'s up?',
      timestamp: Date.now()
    }
  ]
};