/***
 * The goal of this file is mainly to intialize require.js AMD module loader configuration.
 */
requirejs.config({
    /***
     * The path where your JavaScripts files are located.
     */
    baseUrl: '../src/apps/',

    /***
     * Path config is also part of Require and allows to define paths for vendors
     * not found directly under baseUrl.
     * See http://requirejs.org/docs/api.html#config-paths for details.
     */
    paths: {
        /*** List of frameworks/libraries to be included in the codebase. ***/
        'jquery': '../systems/libs/jquery.min',
        'json3': '../systems/libs/json3.min',
        'text': '../systems/libs/text',
        'routie': '../systems/libs/routie.min',
        'text': '../systems/libs/text.min',
        'handlebars': '../systems/libs/handlebars.min',
        'swag': '../systems/libs/swag.min',
        'template': '../systems/utilities/hd-template-mapper',
        'templates': '../../templates'
    },

    /***
     * shim config is part of `Require 2.0`_ and allows to Configure the dependencies
     * and exports for older, traditional “browser globals” scripts that do not use
     * define() to declare the dependencies and set a module value.
     * See http://requirejs.org/docs/api.html#config-shim for more details.
     */
    shim: {
        json3: {
            exports: 'json3'
        },
        text: {
            exports: 'text'
        },
        routie: {
            exports: 'routie'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        swag: {
            deps: ['handlebars']
            exports: 'Swag'
        }
    }
});