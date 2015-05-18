var viola;
(function (viola) {
    var app;
    (function (app) {
        angular.module('app', ['ionic']).config(function ($stateProvider, $urlRouterProvider) {
            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/menu.html'
            }).state('app.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'views/home.html'
                    }
                }
            }).state('app.account', {
                url: '/account',
                views: {
                    'main': {
                        templateUrl: 'views/account.html'
                    }
                }
            }).state('app.about', {
                url: '/about',
                views: {
                    'main': {
                        templateUrl: 'views/about.html'
                    }
                }
            }).state('feed', {
                url: '/feed',
                views: {
                    'feed@app.home': {
                        templateUrl: 'views/feed.html',
                        controller: 'FeedController'
                    }
                }
            }).state('share', {
                url: '/share',
                views: {
                    'share@app.home': {
                        templateUrl: 'views/share.html'
                    }
                }
            });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('app/home');
        }).controller("FeedController", app.FeedController);
    })(app = viola.app || (viola.app = {}));
})(viola || (viola = {}));
//# sourceMappingURL=app.js.map