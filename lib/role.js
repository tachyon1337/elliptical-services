/*
 * =============================================================
 * elliptical.services.Role
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
        root.elliptical.services.Role=factory(root.elliptical);
        root.returnExports = root.elliptical.services.Role;
    }
}(this, function (elliptical) {

    var Role=elliptical.Service.extend({
        '@class':'Role' //{String}



    },{});

    return Role;



}));
