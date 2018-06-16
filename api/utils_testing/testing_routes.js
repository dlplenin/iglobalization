let executeRoute = (method, routePath, req = {}, res, app) => {
  let args = app[method].calls.allArgs().find((a) => a[0] === routePath);

  if (!args) {
    throw new Error('Route ' + method.toUpperCase() + ' ' + routePath + ' is not defined');
  }

  let result = new Promise((resolve, reject) => {
    let statusCode;

    res.status = (code) => {
      statusCode = code;
    };

    res.json = res.json || jasmine.createSpy('json').and.callFake((response = {}) => {
      if (statusCode) {
        response.status = statusCode;
      }
      resolve(response);
    });

    res.error = (error = {}) => {
      res.json({error});
    };

    if (!args[1]) {
      return reject('route function has not been defined !');
    }

    args[args.length - 1](req, res);
  });

  if (args) {
    result.middlewares = args.slice(1, -1);
  }

  return result;
};

export default (route, extraParams) => {
  let app = jasmine.createSpyObj('app', ['get', 'put', 'post', 'delete', 'use']);

  route(app, extraParams);

  let instrumentedRoute = {
    get: (routePath, req, res = {}) => {
      return executeRoute('get', routePath, req, res, app);
    },

    post: (routePath, req, res = {}) => {
      return executeRoute('post', routePath, req, res, app);
    },

    put: (routePath, req, res = {}) => {
      return executeRoute('put', routePath, req, res, app);
    },

    delete: (routePath, req, res = {}) => {
      return executeRoute('delete', routePath, req, res, app);
    }
  };

  return instrumentedRoute;
};
