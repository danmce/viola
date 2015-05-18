module viola.app {
    "use strict";

    export class FeedController {
        constructor(
            public $scope: FeedScope
        ) {
            $scope.title = "test";
        }

        static inject = ["$scope"];
    }
} 