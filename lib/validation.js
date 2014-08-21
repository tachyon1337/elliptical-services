/*
 * =============================================================
 * elliptical.services.Validation v0.9.1
 * =============================================================
 * Copyright (c) 2014 S.Francis, MIS Interactive
 * Licensed MIT
 *
 * Dependencies:
 * elliptical-mvc,elliptical-providers
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
        root.returnExports = root.elliptical.services.Validation;
    }
}(this, function (elliptical,providers) {
    var $validation=providers.$validation;

    var Validation=elliptical.Service.extend({
        '@class':'Validation', //{String},
        $provider:$validation,
        schemas:null,

        /**
         *
         * @param data {Object}
         * @param name {String}
         * @param callback {Function}
         */
        post:function(data,name,callback){
            this.$provider.schemas=this.schemas;
            this.$provider.post(data,name,callback);
        },

        /**
         *
         * @param data {Object}
         * @returns {Object}
         */
        onSuccess:function(data){
            return this.$provider.onSuccess(data);
        },

        /**
         *
         * @param data {Object}
         * @param msg {String}
         * @returns {Object}
         */
        onError:function(data,msg){
            return this.$provider.onError(data,msg);
        }



    },{});

    return Validation;



}));

