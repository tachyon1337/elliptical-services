/*
 * =============================================================
 * elliptical.services.Log v0.9.1
 * =============================================================
 * Copyright (c) 2014 S.Francis, MIS Interactive
 * Licensed MIT
 *
 * Dependencies:
 * elliptical-mvc
 */

//umd pattern

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //commonjs
        module.exports = factory(require('elliptical-mvc'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['elliptical-mvc'], factory);
    } else {
        // Browser globals (root is window)
        root.elliptical.services=root.elliptical.services || {};
        root.elliptical.services.Log=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Log;
    }
}(this, function (elliptical) {

    var Log=elliptical.Service.extend({
        '@class':'Log' //{String}



    },{});

    return Log;



}));
