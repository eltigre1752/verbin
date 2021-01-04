import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

router.get('/:id', (req, res, next) => {
  const fp = path.resolve('audio/1.mp3');
  const stat = fs.statSync(fp);

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size,
    'Content-Disposition': 'filename="music.mp3"',
  });

  const readStream = fs.createReadStream(fp);
  readStream.pipe(res);
});

export { router as AudioRouter };
