app.controller("MainController", ["$scope", "twitch", "channels", function($scope, twitch, channels){
    
    $scope.videos = [];
    $scope.streamings = [];
    
    twitch.then(function(data){
        jQuery("#spinner").hide();
       console.log(data.data.videos);
        for(var i = 0; i < data.data.videos.length; i++){
            
            $scope.videos.push({
                img: data.data.videos[i].preview,
                title: data.data.videos[i].title,
                url: data.data.videos[i].url
            });
            
        }
        
    });
    
    channels.then(function(data){
        
       console.log(data.data.streams); 
        var n 
        if(data.data.streams.length > 10){
            n = 10;
        }else{
            n = data.data.streams.length;
        }
        for(var i = 0; i < n; i++){
            
            $scope.streamings.push({
                name: data.data.streams[i].channel.display_name,
                url: data.data.streams[i].channel.url,
                preview: data.data.streams[i].preview.large,
                profile: data.data.streams[i].channel.logo
            });
            
        }    
        
    });
    
    
}]);