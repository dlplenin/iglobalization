import {localeDictionary} from '../iGlobalizationController.js';

describe('Globalization', () => {
  let dictionaries;

  beforeEach(() => {
    dictionaries = {
      'en-us': {
        welcome: 'welcome',
        dashboard: 'dashboard',
        detail: {
          toogle: 'Toggle'
        }
      },
      'es-ec': {
        welcome: 'bienvenido',
        dashboard: 'tablero'
      }
    };
  });

  it('should return a properly dictionary', () => {
    let dictionary = localeDictionary('en-US', dictionaries['en-us']);
    expect(dictionary.welcome).toBe('welcome');
    expect(dictionary.dashboard).toBe('dashboard');
    expect(dictionary['detail.toogle']).toBe('Toggle');
    
    dictionary = localeDictionary('es-EC', dictionaries['es-ec']);
    expect(dictionary.dashboard).toBe('tablero');
  });

  it('should call to default dictionayy if a wrong locale value is receibed', () => {
    let dictionary = localeDictionary('nonExistent');
    expect(dictionary.welcome).toBe('welcome');
  });
});
