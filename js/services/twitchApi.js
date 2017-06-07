app.factory("twitch", ["$http", function ($http) {

    var config = {
        headers: {
            "Client-ID": "oiechq2efncexqgj35ceoq0k2zesyf"
        }
    };

    return $http.get("https://api.twitch.tv/kraken/videos/top?period=month&game=League%20of%20Legends", config).then(function successCallback(data) {
        return data;
    });
}]);

app.factory("channels", ["$http", function ($http) {

    var config = {
        headers: {
            "Client-ID": "oiechq2efncexqgj35ceoq0k2zesyf"
        }
    };

    return $http.get("https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends", config).then(function successCallback(data) {
        return data;
    });

}]);
