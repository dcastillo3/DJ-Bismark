/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Header} from './header';
export {default as Navbar} from './navbar';
export {default as UserHome} from './user-home';
export {default as Home} from './home';
export {default as Photos} from './photos';
export {default as Videos} from './videos';
export {default as Bio} from './bio';
export {default as Store} from './store';
export {default as Footer} from './footer';
export {Login, Signup} from './auth-form';
