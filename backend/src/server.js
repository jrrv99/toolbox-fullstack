import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import errorHandler from './middlewares/errorHandler.js';
import router from './routes/files.js';

const PORT = process.env.PORT ?? 3001;

const server = express();

/* __________ MIDDLEWARES __________ */
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use(router);

/* __________ ERROR MIDDLEWARES __________ */
server.use(errorHandler);

// 404 - NOT FOUND
server.use(function (req, res, next) {
  res.status(404).send('Source not found!');
  next();
});


/* __________ SERVER EXPOSE __________ */
server.listen(PORT, () => {
  console.info(`\t⚡️[server]: http://localhost:${PORT}`);
  console.info(`\t    Press CTRL-C to stop\n`);
});

export default server; // module.exports = server