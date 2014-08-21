
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

/*
 * =============================================================
 * elliptical.services.Membership v0.9.1
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
        root.elliptical.services.Membership=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Membership;
    }
}(this, function (elliptical) {


    var Membership = elliptical.Service.extend({
        '@class':'Membership', //{String}


        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        login: function(params,callback){
            if(!this.$provider.login){
                throw new Error('login method not implemented');
            }
            this.$provider.login(params,callback);
        },

        authenticate:function(params,callback){
            if(!this.$provider.authenticate){
                throw new Error('authenticate method not implemented');
            }
            this.$provider.authenticate(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        resetPassword: function(params,callback){
            if(!this.$provider.resetPassword){
                throw new Error('resetPassword method not implemented');
            }
            this.$provider.resetPassword(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        changePassword: function(params,callback){
            if(!this.$provider.changePassword){
                throw new Error('changePassword method not implemented');
            }
            this.$provider.changePassword(params,callback);
        },

        /**
         *
         * @param callback {Function}
         */
        logout: function(callback){
            if(!this.$provider.logout){
                throw new Error('logout method not implemented');
            }
            this.$provider.logout(callback);
        },

        /**
         * @param params {Object}
         * @param callback {Function}
         */
        signUp: function(params,callback){
            if(!this.$provider.signUp){
                throw new Error('signUp method not implemented');
            }
            this.$provider.signUp(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        roleExists: function(params,callback){
            if(!this.$provider.roleExists){
                throw new Error('roleExists method not implemented');
            }
            this.$provider.roleExists(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        isUserInRole: function(params,callback){
            if(!this.$provider.isUserInRole){
                throw new Error('isUserInRole method not implemented');
            }
            this.$provider.isUserInRole(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        isUserInRoles: function(params,callback){
            if(!this.$provider.isUserInRoles){
                throw new Error('isUserInRoles method not implemented');
            }
            this.$provider.isUserInRoles(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        getRolesForUser: function(params,callback){
            if(!this.$provider.getRolesForUser){
                throw new Error('getRolesForUser method not implemented');
            }
            this.$provider.getRolesForUser(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        addUserToRole: function(params,callback){
            if(!this.$provider.addUserToRole){
                throw new Error('addUserToRoles method not implemented');
            }
            this.$provider.addUserToRole(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        removeUserFromRole: function(params,callback){
            if(!this.$provider.removeUserFromRole){
                throw new Error('removeUserFromRoles method not implemented');
            }
            this.$provider.removeUserFromRole(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        getUsersInRole: function(params,callback){
            if(!this.$provider.getUsersInRole){
                throw new Error('getUsersInRole method not implemented');
            }
            this.$provider.getUsersInRole(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        createRole: function(params,callback){
            if(!this.$provider.createRole){
                throw new Error('createRole method not implemented');
            }
            this.$provider.createRole(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        deleteRole: function(params,callback){
            if(!this.$provider.deleteRole){
                throw new Error('deleteRole method not implemented');
            }
            this.$provider.deleteRole(params,callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        isAuthenticated: function(params,callback){
            if(!this.$provider.isAuthenticated){
                throw new Error('isAuthenticated method not implemented');
            }
            if(params===undefined && callback===undefined){
                return this.$provider.isAuthenticated(params,callback);
            }else{
                this.$provider.isAuthenticated(params,callback);
            }
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        profile: function(params,callback){
            if(!this.$provider.profile){
                throw new Error('profile method not implemented');
            }
            this.$provider.profile(params,callback);
        }



    },{

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        login: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.login(data, callback);
        },

        /**
         *
         * @param params {object}
         * @param callback {Function}
         */
        signUp:function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.signUp(data, callback);
        },

        /**
         *
         *
         * @param callback {Function}
         */
        logout: function(callback){
            this.constructor.logout(callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        roleExists: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.roleExists(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        isUserInRole: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.isUserInRole(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        isUserInRoles: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.isUserInRoles(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        getRolesForUser: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.getRolesForUser(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        addUserToRoles: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.addUserToRoles(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        removeUserFromRoles: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.removeUserFromRoles(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        getUsersInRole: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.getUsersInRole(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        createRole: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.createRole(data, callback);
        },

        /**
         *
         * @param params {Object}
         * @param callback {Function}
         */
        deleteRole: function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.deleteRole(data, callback);
        },

        profile:function(params,callback){
            var data = this._data;
            (typeof params==='function') ? callback=params : data=params;
            this.constructor.profile(data, callback);
        }

    });

    return Membership;


}));


/*
 * =============================================================
 * elliptical.services.Message v0.9.1
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
        root.elliptical.services.Message=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Message;
    }
}(this, function (elliptical) {

    var Message=elliptical.Service.extend({
        '@class':'Message' //{String}



    },{});

    return Message;



}));

/*
 * =============================================================
 * elliptical.services.Role v0.9.1
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
        root.elliptical.services.Role=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Role;
    }
}(this, function (elliptical) {

    var Role=elliptical.Service.extend({
        '@class':'Role' //{String}



    },{});

    return Role;



}));

/*
 * =============================================================
 * elliptical.services.Schema v0.9.1
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
        root.elliptical.services.Schema=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Schema;
    }
}(this, function (elliptical) {

    var Schema=elliptical.Service.extend({
        '@class':'Schema' //{String}



    },{});

    return Schema;



}));

/*
 * =============================================================
 * elliptical.services.Session v0.9.1
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

