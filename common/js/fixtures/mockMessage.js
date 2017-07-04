export default function({ sender, channelId, body, ts = null }) {
  const timestamp = ts || Date.now();
  const id = timestamp;

  return { id, sender, channelId, body, timestamp };
}
