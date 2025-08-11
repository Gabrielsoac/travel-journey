import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { chat } from './chatService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/static', express.static(join(__dirname, 'static'), { extensions: ['css', 'svg', 'js'] }));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'templates', 'chat.html'));
});

app.post(
  '/chat/:sessionId',
  chat
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});