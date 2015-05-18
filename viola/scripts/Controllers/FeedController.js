var viola;
(function (viola) {
    var app;
    (function (app) {
        "use strict";
        var FeedController = (function () {
            function FeedController($scope) {
                this.$scope = $scope;
                $scope.title = "test";
            }
            FeedController.inject = ["$scope"];
            return FeedController;
        })();
        app.FeedController = FeedController;
    })(app = viola.app || (viola.app = {}));
})(viola || (viola = {}));
//# sourceMappingURL=FeedController.js.map