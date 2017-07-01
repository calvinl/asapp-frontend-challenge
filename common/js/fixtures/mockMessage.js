export default function({ sender, channelId, body, ts = null }) {
  const id = Date.now();
  const timestamp = ts || id;

  return { id, sender, channelId, body, timestamp };
}
