import { Application, EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default (app: EggAppConfig) => {
  const exports: any = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico')),
    '/logo.png': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/logo.png')),
  };

  exports.view = {
    cache: false,
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
      basedir: path.join(app.baseDir, 'app/view'),
    },
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public'),
  };

  exports.keys = '123456';

  exports.middleware = [
    'access',
  ];

  return exports;
};
