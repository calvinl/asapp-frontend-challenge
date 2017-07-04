import mockUser from './mockUser';

const participants = [
  mockUser('rob'),
  mockUser('laura'),
  mockUser('bill'),
  mockUser('tina')
];

export const [rob, laura, bill, tina] = participants;

export default {
  name: null,
  participants,
  type: 'private',
  messages: [
    {
      id: 1,
      sender: laura,
      body: 'Hey guys, what do you all think about the new product designs?',
      timestamp: Date.now() - (60 * 1000 * 20)
    },
    {
      id: 2,
      sender: laura,
      body: 'iI made them extra special this time around.',
      timestamp: Date.now() - (60 * 1000 * 20)
    },
    {
      id: 3,
      sender: rob,
      body: '@laura, they look great! I especially love the new meme integration!',
      timestamp: Date.now() - (60 * 1000 * 15)
    },
    {
      id: 4,
      sender: rob,
      body: '@tina, what do you think? You are the creative director, after all.',
      timestamp: Date.now() - (60 * 1000 * 11)
    },
    {
      id: 5,
      sender: tina,
      body: 'Don\'t get snarky with me @rob. You\'re already on thin ice here.',
      timestamp: Date.now() - (60 * 1000 * 5)
    },
    {
      id: 6,
      sender: bill,
      body: '😱',
      timestamp: Date.now()
    }
  ]
};
