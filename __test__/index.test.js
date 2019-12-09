import { simpleAdd } from '../src/module/handleNum/handleNum.js';

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(simpleAdd(0.1, 0.2)).toBe(0.3);
});


test('adds null + 0.2 to equal 0.3', () => {
    expect(simpleAdd(null, 0.2)).toBe(0.2);
});
