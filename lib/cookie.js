
/*
 * =============================================================
 * elliptical.services.Cookie v0.9.1
 * =============================================================
 * Copyright (c) 2014 S.Francis, MIS Interactive
 * Licensed MIT
 *
 * Dependencies:
 *
 */

//umd pattern

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //commonjs
        module.exports = factory(require('elliptical-mvc'),require('elliptical-providers'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['elliptical-mvc','elliptical-providers'], factory);
    } else {
        // Browser globals (root is window)
        root.elliptical.services=root.elliptical.services || {};
        root.elliptical.services.Log=factory(root.elliptical,root.elliptical.providers);
        root.returnExports = root.elliptical.services.Cookie;
    }
}(this, function (elliptical,providers) {

    var $cookie=providers.$cookie;
    var Cookie=elliptical.Service.extend({
        '@class':'Cookie', //{String}
        $provider:$cookie,

        get:function(key){
            return this.$provider.get(key);
        },

        post:function(params){
            return this.$provider.post(params);
        },

        put:function(params){
            return this.$provider.put(params);
        },

        delete:function(key){
            return this.$provider.delete(key);
        }



    },{});

    return Cookie;



}));