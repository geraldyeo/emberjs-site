/**
 *                             _/                  _/                                    _/
 *      _/_/_/      _/_/    _/_/_/_/    _/_/_/  _/_/_/_/    _/_/      _/_/      _/_/_/  _/_/_/      _/_/    _/_/_/
 *     _/    _/  _/    _/    _/      _/    _/    _/      _/    _/  _/_/_/_/  _/_/      _/    _/  _/    _/  _/    _/
 *    _/    _/  _/    _/    _/      _/    _/    _/      _/    _/  _/            _/_/  _/    _/  _/    _/  _/    _/
 *   _/_/_/      _/_/        _/_/    _/_/_/      _/_/    _/_/      _/_/_/  _/_/_/    _/    _/    _/_/    _/_/_/
 *  _/                                                                                                  _/
 * _/                                                                                                  _/
 *
 * @author: geraldyeo
 * Date: 16/4/12
 */

App.siteConfig = (function ($, path) {
    /**
     * Load handler.
     * @private
     *
     * @param data
     * @param status
     */
    var onload = function (data, status) {
        this.config = App.Config.create({content:data});
        this.sigLoaded.dispatch(this.getConfig());
    };


    /**
     * SiteConfig class.
     *
     * @param path
     */
    var SiteConfig = function (path) {
        this.sigLoaded = new signals.Signal();
        this.path = path || 'config.json';
        this.config = null;


        /**
         * Loads config file.
         * @public
         *
         * @param path
         */
        this.load = function (path) {
            this.path = path || this.path;
            if (this.path) {
                $.getJSON(path, onload.bind(this));
            }
        };


        /**
         * return Config VO
         * @public
         */
        this.getConfig = function () {
            return this.config;
        };
    };


    // return singleton
    return new SiteConfig(path);
}(jQuery, window.siteConfigPath));