import createUser from './createUser';

const participants = [
  createUser('rob'),
  createUser('laura'),
  createUser('bill'),
  createUser('tina')
];

export const [rob, laura, bill, tina] = participants;

export default {
  id: 3,
  name: null,
  participants,
  type: 'private',
  messages: [
    {
      id: 1,
      sender: laura,
      body: 'hey guys, what do you all think about the new product designs?',
      timestamp: Date.now()
    },
    {
      id: 2,
      sender: laura,
      body: 'i made them extra special this time around.',
      timestamp: Date.now()
    },
    {
      id: 3,
      sender: rob,
      body: '@laura, they look great! i especially love the new meme integration!',
      timestamp: Date.now()
    },
    {
      id: 4,
      sender: rob,
      body: '@tina, what do you think? you are the creative director, after all.',
      timestamp: Date.now()
    },
    {
      id: 5,
      sender: tina,
      body: 'don\'t get snarky with me @rob. you\'re already on thin ice here.',
      timestamp: Date.now()
    },
    {
      id: 6,
      sender: bill,
      body: '😱',
      timestamp: Date.now()
    }
  ]
};
