var app = function () {
    var appMethods = {};
    appMethods.connection = null;

    appMethods.initialize = function () {
        appMethods.createConnection();
        appMethods.bindShootingEvents();
    };

    appMethods.createConnection = function () {
        appMethods.connection = $.connection("/CodeOfHonor");
    };

    appMethods.bindShootingEvents = function () {

    };
    return appMethods;
}();
$(function () {
    app.initialize();
});