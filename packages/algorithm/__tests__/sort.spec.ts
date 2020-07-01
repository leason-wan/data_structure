import { sort as bubble } from '../src/sort/bubble';
import { sort as insertion } from '../src/sort/insertion';
import { sort as quick } from '../src/sort/quick';
import { sort as merge } from '../src/sort/merge';

function testSort(sort: Function, name: string) {

  function createArray(length: number) {
    const arr = [];
    for(let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random()*100));
    }
    return arr;
  }

  describe(`test ${name} sort`, () => {
    
    test('amount number sort', () => {
      const data = createArray(1000);
      const newData = [...data];
      const dataSorted = newData.sort((a ,b) => a - b);
      sort(data);
      expect(data).toMatchObject(dataSorted);
    })

    test('empty number sort', () => {
      const data: number[] = [];
      const dataSorted: number[] = [];
      sort(data);
      expect(data).toMatchObject(dataSorted);
    })

    test('one number sort', () => {
      const data = [1];
      const dataSorted = [1];
      sort(data);
      expect(data).toMatchObject(dataSorted);
    })
    
  })

}

testSort(bubble, 'bubble');
testSort(insertion, 'insertion');
testSort(quick, 'quick');
testSort(merge, 'merge');
