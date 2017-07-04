import { last } from 'lodash';

export const humanString = (users, user = null) => {
  const people = (
    user ? users.filter(u => u.handle !== user.handle) : users
  ).map(u => u.handle);
  const len = people.length;

  if (!len) return null;

  switch (len) {
    case 1:
      // one person: 'laura'
      return people[0];
    case 2:
      // two people: 'laura and rob'
      return people.join(' and ');
    case 3: {
      // three people: 'laura, rob and drake'
      return `${people.slice(0, len - 1).join(', ')} and ${last(people)}`;
    }
    case 4:
    default: {
      // four or more people: 'laura, rob, and 18 people';
      return `${people.slice(0, 2).join(', ')} and ${len - 2} others`;
    }
  }
};
