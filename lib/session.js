/*
 * =============================================================
 * elliptical.services.Session
 * =============================================================
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
        root.elliptical.services.Session=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Session;
    }
}(this, function (elliptical) {


    var Session=elliptical.Service.extend({
        '@class':'Session', //{String}

        get:function(params,callback) {
            return this.$provider.get(params,callback);
        },

        put:function(params,callback){
            return this.$provider.put(params,callback);
        },

        delete:function(params,callback){
            return this.$provider.delete(params,callback);
        }


    },{

        init:function($provider){
            ($provider!==undefined) ? this.$provider=$provider : this.$provider=null;

        },

        get:function(params,callback) {
            var $provider=(this.$provider) ? this.$provider : this.constructor.$provider;
            return $provider.get(params,callback);
        },

        put:function(params,callback){
            var $provider=(this.$provider) ? this.$provider : this.constructor.$provider;
            return $provider.put(params,callback);
        },

        delete:function(params,callback){
            var $provider=(this.$provider) ? this.$provider : this.constructor.$provider;
            return $provider.delete(params,callback);
        }


    });

    return Session;


}));
