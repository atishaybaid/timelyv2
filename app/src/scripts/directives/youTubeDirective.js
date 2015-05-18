TimelyApp.directive('youtube', function($window) {
    var directive = {};
    var player;
    directive.restrict = 'E';
    directive.template = '<div id="myPlayer" style="visibility:hidden"></div>';
    directive.link = function($scope, element, attribute) {
        $window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('myPlayer', {
                height: 0,
                width: 0,
                videoId: 'OG0xt2xTq4A',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        };
    };
    $window.onPlayerReady = function(event) {
        event.target.loadPlaylist("im3qPTWiRoc");
        player.playVideo();
    };
    $window.onPlayerStateChange = function(event) {
        if (event.data == 0) {
            player.playVideo();
        }
    }
    return directive;
});