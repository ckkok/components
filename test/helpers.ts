import JSDOM from 'jsdom-global';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Configure mock DOM properties here
 * jsdom-global exposes the window and document objects globally
 */
JSDOM('<!doctype html><html><body></body></html>');

// Configure Enzyme here
configure({ adapter: new Adapter() });
