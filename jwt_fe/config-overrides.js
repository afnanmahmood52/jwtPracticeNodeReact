const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
require("dotenv").config({path: '../.env'});

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    return config;
};