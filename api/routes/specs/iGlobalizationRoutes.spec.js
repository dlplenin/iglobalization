import instanceRoute from '../../utils_testing/testing_routes';
import iGlobalizationRoutes from '../iGlobalizationRoutes';

describe('iGlobalization route', () => {
  let routes;

  beforeEach(() => {
    routes = instanceRoute(iGlobalizationRoutes);
  });

  it('should call to dictionary get', (done) => {
    let req = {
      params: {locale: 'en-US'}
    };

    routes.get('/dictionay/:locale', req)
    .then((res) => {
      expect(res).toEqual(jasmine.objectContaining({
        welcome: 'welcome', 
        dashboard: 'dashboard'
      }));
    
      done();
    });
  });
});
