/*globals module*/

var createPreprocessor = function (logger, basePath) {
    'use strict';
    return function (content, file, done) {
        var filename = file.originalPath.replace(basePath + '/', '').replace('.base64', '');

        file.path = file.path + '.js';
        content = content.replace(/\s/g, "");
        done("window.__raw__ = window.__raw__ || {};\nwindow.__raw__['" +
                filename + "'] = window.atob('" + content + "');\n"
              );
    };
};

createPreprocessor.$inject = ['logger', 'config.basePath'];

module.exports = {
    'preprocessor:base64-to-js': ['factory', createPreprocessor]
};
