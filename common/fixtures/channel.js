import createUser from './createUser';

const participants = [
  createUser('rob'),
  createUser('laura'),
  createUser('tina'),
  createUser('bill'),
  createUser('joel'),
];

export const [rob] = participants;

export default {
  id: 2,
  name: 'general',
  participants,
  type: 'channel',
  messages: [
    {
      id: 1,
      sender: rob,
      body: 'hello, everybody!',
      timestamp: Date.now()
    }
  ]
};
