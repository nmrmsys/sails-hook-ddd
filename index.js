const DDD = require('data-domain-driver').DDD;

module.exports = function (sails) {
    return {

        defaults: {
        },

        initialize: function (cb) {
            const config = sails.config.ddd;
            // console.log('sails.config.ddd: %O', config);
            sails.DDD = new DDD(config);
            cb();
        }

    };
};