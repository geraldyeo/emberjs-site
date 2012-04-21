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
 * Date: 13/4/12
 */

App.appController = (function () {
    var onload = function () {
        log(this.configFile.getConfig().getValueForKey('settings'));

        this.sayHello.appendTo('.content');
        this.sayHello.set('name', this.configFile.getConfig().getValueForKey('settings').name);
    };


    var controller = Em.Object.create({
        // models
        configFile:App.siteConfig,

        // controllers & views
        sayHello:App.SayHelloView.create(),


        start:function () {
            this.configFile.sigLoaded.addOnce(onload.bind(this));
            this.configFile.load('config.json');
        }
    });


    return controller;
}());

