import mockUser from './mockUser';

const participants = [
  mockUser('rob'),
  mockUser('laura'),
  mockUser('tina'),
  mockUser('bill'),
  mockUser('joel'),
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
