export class QuoteService {
    getAllQuotes(onSuccess, onError) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://integration.ufab.io/v1/dataservices/Quotes", false);
        xhr.send();
        var quotes = JSON.parse(xhr.responseText).value;
        console.log(quotes);
        return quotes;
    }
}