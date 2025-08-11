const SESSION_KEY = (sessionId) => `chat:${sessionId}`;

export async function getChatHistory(sessionId, redis) {
  const data = await redis.get(SESSION_KEY(sessionId));
  return data ? JSON.parse(data) : [];
}

export async function saveChatHistory(sessionId, history, redis) {
  await redis.set(SESSION_KEY(sessionId), JSON.stringify(history), {
  });
}
