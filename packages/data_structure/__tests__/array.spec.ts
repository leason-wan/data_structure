import Array from '../src/array';

describe('test array', () => {
  const arr = Array(4)
  test('create array', () => {
    expect(arr.toString()).toBe('[ undefined, undefined, undefined, undefined ]');
  });

  test('get array first item', () => {
    expect(arr.get(0)).toBe(undefined);
  })

  test('set item for array', () => {
    arr.set(0, 'first item');
    arr.set(1, 'second item');
    expect(arr.toString()).toBe('[ first item, second item, undefined, undefined ]');
  })

  test('insert item to array', () => {
    arr.insert(1, 'insert item');
    expect(arr.toString()).toBe('[ first item, insert item, second item, undefined ]');
  })

  test('delete item', () => {
    arr.del(0)
    expect(arr.toString()).toBe('[ insert item, second item, undefined, undefined ]');
  })

})