import storeDev from './store.dev';
import storeProd from './store.prod';

export default process.env.NODE_ENV === 'production' ? storeProd : storeDev;
