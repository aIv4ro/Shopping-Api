import './config/loadEnv.js';
import './config/db.js';
import server from './server.js';

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Server running on localhost:${port}`));
