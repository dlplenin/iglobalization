import {flattenMessages} from '../flattenMessage';

describe('flattenMessages', () => {
  it('should behave...', () => {
    const dictionary = {
      welcome: 'welcome',
      detail: {
        toogle: 'Toggle',
        price: {
          values: {
            value1: 'value1'
          }
        }
      }
    };

    const flattenResponse = flattenMessages(dictionary);

    expect(flattenResponse).toEqual({
      welcome: 'welcome',
      'detail.toogle': 'Toggle',
      'detail.price.values.value1': 'value1'
    });
  });
});
