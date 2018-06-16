// import instanceRoute from '../../utils_testing/testing_routes';
import iGlobalizationRoutes from '../iGlobalizationRoutes';

describe('iGlobalization route', () => {
  let routes;

  beforeEach(() => {
    // routes = instanceRoute(iGlobalizationRoutes);
    // console.log('routes: ', routes);
  });

  it('should call dictionay get', (done) => {
    // let req = {
    //   params: {locale: 'en-US'}
    // };

    // let route = jasmine.createSpyObj('route', ['get'])
    // let get = jasmine.createSpy('get');

    iGlobalizationRoutes({route});
    // console.log('iGlobalizationRoutes: ', iGlobalizationRoutes);

    // routes.get('/api/dictionay', req)
    // .then((res) => {
    //   console.log('res: ', res);
    //   // expect(res).toEqual(['****']);
      done();
    // })
  });
});
