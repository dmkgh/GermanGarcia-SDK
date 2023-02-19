"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LorConsumer = void 0;
const movies_1 = require("../controllers/movies");
const movie_1 = require("../controllers/movie");
const moviequote_1 = require("../controllers/moviequote");
// The LorConsumer class has a private property called base_url that represents the base URL of the movie API. It is passed as an argument to the constructor when creating a new instance of the class.
// Each of the three methods creates an instance of a controller class, passing in the base_url property to the constructor, and uses that instance to make a request to the movie API. The response data is then returned as a promise.
class LorConsumer {
    constructor(base_url) {
        this.base_url = base_url;
    }
    //retrieves a list of movies using the MoviesController class from the ../controllers/movies module.
    get_movies() {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new movies_1.MoviesController(this.base_url);
            const movies = yield controller.get_movies();
            return movies;
        });
    }
    //retrieves a specific movie by ID using the MovieController class from the ../controllers/movie module.
    get_movie(movieid) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new movie_1.MovieController(this.base_url, movieid);
            const movie = yield controller.get_movie();
            return movie;
        });
    }
    //retrieves a random quote from a specific movie using the MovieQuoteController class from the ../controllers/moviequote module.
    get_movie_quote(movieid) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new moviequote_1.MovieQuoteController(this.base_url, movieid);
            const quote = yield controller.get_moviequote();
            return quote;
        });
    }
}
exports.LorConsumer = LorConsumer;
//Some code to verify locally, not needed in prod
(() => __awaiter(void 0, void 0, void 0, function* () {
    const sdk = new LorConsumer("https://the-one-api.dev/v2");
    try {
        const movies = yield sdk.get_movies();
        console.log(movies);
        const movie = yield sdk.get_movie("5cd95395de30eff6ebccde5c");
        console.log(movie);
        const quote = yield sdk.get_movie_quote("5cd95395de30eff6ebccde5c");
        console.log(quote);
    }
    catch (error) {
        console.error(error);
    }
}))();
//# sourceMappingURL=lor-api-consumer.js.map