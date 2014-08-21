/*
 * =============================================================
 * elliptical.services.Identity v0.9.1
 * =============================================================
 * Copyright (c) 2014 S.Francis, MIS Interactive
 * Licensed MIT
 *
 * Dependencies:
 * elliptical-mvc,elliptical.providers.$identity
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
        root.elliptical.services.Identity=factory(root.elliptical,root.elliptical.providers);
        root.returnExports = root.elliptical.services.Identity;
    }
}(this, function (elliptical,providers) {

    var $identity=providers.$identity;

    var Identity=elliptical.Service.extend({
        '@class':'Identity', //{String}
        $provider:$identity,

        on:function(token,profile,callback){
            this.$provider.on(token,profile,callback);
        },

        off:function(callback){
            this.$provider.off(callback);
        },

        setKeys:function(params){
            this.$provider.setKeys(params);
        }


    },{});

    return Identity;



}));
