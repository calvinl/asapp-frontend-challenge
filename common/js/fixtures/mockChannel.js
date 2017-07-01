export default function(opts) {
  const { name = null, participants = [], type = 'private', messages = [] } = opts;

  return {
    id: Date.now(),
    name,
    participants,
    type,
    messages
  };
}
