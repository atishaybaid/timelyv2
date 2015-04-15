TimelyApp.directive('youtube', function($window) {
    var directive = {};
    var player;
    
    directive.restrict = 'E';

    directive.template = '<div id="myPlayer"></div>';
    
    directive.compile = function(element, attribute) {
    	console.log("compile working");
        var scriptTag = document.createElement("script");
        scriptTag.src = "http://www.youtube.com/iframe_api";
        var orignalScriptTag = document.getElementsByTagName('script')[0];
        console.log(orignalScriptTag.parentNode);
        orignalScriptTag.parentNode.insertBefore(scriptTag, orignalScriptTag);
        var link = function($scope, element, attribute) {
            $window.onYouTubeIframeAPIReady = function() {
                player = new YT.Player('myPlayer', {
                    height: '390',
                    width: '670',
                    events: {
                        'onReady': onPlayerReady,
                    }
                });
            };
        };

        return link;
    };

    $window.onPlayerReady = function(event){
    	console.log(event);
                        	//player.cuePlaylist(["OG0xt2xTq4A","jOYR3k1VhUQ"]);
                        //event.target.playVideo();
                        	//player.playVideo();

    };

    return directive;
})