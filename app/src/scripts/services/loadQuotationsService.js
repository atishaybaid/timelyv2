TimelyApp.service("loadQuotationsService", function() {
    var quotes = [{
        quote: "Stay Hungry,Stay foolish"
    }, {
        quote: "If you want to achieve greatness stop asking for permission"
    }, {
        quote: "Things work out best for those who make the best of how things work out"
    }, {
        quote: "To live a creative life, we must lose our fear of being wrong"
    }, {
        quote: "If you are not willing to risk the usual you will have to settle for the ordinary"
    }, {
        quote: "Trust because you are willing to accept the risk, not because it's safe or certain"
    }, {
        quote: "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea"
    }, {
        quote: "All our dreams can come true if we have the courage to pursue them"
    }, {
        quote: "Good things come to people who wait, but better things come to those who go out and get them"
    }, {
        quote: "If you do what you always did, you will get what you always got"
    }];
    this.todaysQuote = function() {
        var date = new Date();
        var dateDay = date.getDate() % 10;
        var quoteOfTheDay = quotes[dateDay].quote;
        return quoteOfTheDay;
    };

})