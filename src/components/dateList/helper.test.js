import {calculateMax} from './helper';
import {sortDate} from './helper';
import {dayOfWeek} from './helper';

describe('test helper functions', () => {
  it('test calculateMax', () => {
    expect(calculateMax([
      {
        in_count: 50
      }, {
        in_count: 90
      }
    ])).toBe(90);
  });

  it('test sortDate', () => {
    const array = {
      data: [
        {
          date: '2017-10-05'
        }, {
          date: '2017-10-04'
        }
      ]
    }
    expect(sortDate(array)).toEqual([
      {
        date: '2017-10-05'
      }, {
        date: '2017-10-04'
      }
    ])
  });

  it('test dayOfWeek', () => {
    const number = 3;
    expect(dayOfWeek(number)).toBe('WED');
  });

});
