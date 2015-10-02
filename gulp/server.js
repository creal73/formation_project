'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var conf = require('../gulpfile.config');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var HttpsProxyAgent = require('https-proxy-agent');

function setupCorporateProxy(options) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    options.agent = new HttpsProxyAgent(proxyServer);
    gutil.log(gutil.colors.cyan('Using corporate proxy server: ' + proxyServer));
  }
  return options;
}

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var server = {
    baseDir: baseDir,
    routes: null,
    middleware: []
  };


  // We activate a server proxy if we found a configuration for it.
  if (conf.backendProxy) {
    var proxyMiddleware = require('http-proxy-middleware');
    var options = null;

    if (Array.isArray(conf.backendProxy)) {
      for (var i = 0; i < conf.backendProxy.length; i++) {
        var proxy = conf.backendProxy[i];
        options = setupCorporateProxy(proxy.options);
        server.middleware.push(proxyMiddleware(proxy.context, options));
      }
    } else {
      options = setupCorporateProxy(conf.backendProxy.options);
      server.middleware.push(proxyMiddleware(conf.backendProxy.context, options));
    }
  }



  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([conf.paths.tmp, conf.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp, conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
