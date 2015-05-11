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
                videoId:'OG0xt2xTq4A',
                events: {
                    'onReady': onPlayerReady,
                }
            });
        };
    };
    $window.onPlayerReady = function(event) {
        console.log("at onReady");
        event.target.loadPlaylist("_SaEl4cKaAo,w_HaezV0DqI,I4d0KU-SuBc");

        player.playVideo();
    };
    return directive;
});