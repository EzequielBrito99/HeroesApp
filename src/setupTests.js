import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import {createSerializer} from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
