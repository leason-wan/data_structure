import Stack from '../src/stack'

describe('test stack', () => {
  const s = Stack();

  test('create stack', () => {
    expect(s).toMatchSnapshot();
  })

  test('push stack & toString', () => {
    s.push(0);
    s.push(1);
    s.push(2);
    expect(s.toString()).toBe('0 -> 1 -> 2');
  })

  test('top stack', () => {
    expect(s.top()).toBe(2);
  })

  test('pop stack', () => {
    expect(s.pop()).toBe(2);
  })

})