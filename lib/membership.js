/*
 * =============================================================
 * elliptical.services.Membership
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

