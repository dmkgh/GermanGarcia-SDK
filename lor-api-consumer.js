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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LorConsumer = void 0;
var movies_1 = require("./controllers/movies");
var movie_1 = require("./controllers/movie");
var moviequote_1 = require("./controllers/moviequote");
// The LorConsumer class has a private property called base_url that represents the base URL of the movie API. It is passed as an argument to the constructor when creating a new instance of the class.
// Each of the three methods creates an instance of a controller class, passing in the base_url property to the constructor, and uses that instance to make a request to the movie API. The response data is then returned as a promise.
var LorConsumer = /** @class */ (function () {
    function LorConsumer(base_url) {
        this.base_url = base_url;
    }
    //retrieves a list of movies using the MoviesController class from the ../controllers/movies module.
    LorConsumer.prototype.get_movies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var controller, movies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = new movies_1.MoviesController(this.base_url);
                        return [4 /*yield*/, controller.get_movies()];
                    case 1:
                        movies = _a.sent();
                        return [2 /*return*/, movies];
                }
            });
        });
    };
    //retrieves a specific movie by ID using the MovieController class from the ../controllers/movie module.
    LorConsumer.prototype.get_movie = function (movieid) {
        return __awaiter(this, void 0, void 0, function () {
            var controller, movie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = new movie_1.MovieController(this.base_url, movieid);
                        return [4 /*yield*/, controller.get_movie()];
                    case 1:
                        movie = _a.sent();
                        return [2 /*return*/, movie];
                }
            });
        });
    };
    //retrieves a random quote from a specific movie using the MovieQuoteController class from the ../controllers/moviequote module.
    LorConsumer.prototype.get_movie_quote = function (movieid) {
        return __awaiter(this, void 0, void 0, function () {
            var controller, quote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = new moviequote_1.MovieQuoteController(this.base_url, movieid);
                        return [4 /*yield*/, controller.get_moviequote()];
                    case 1:
                        quote = _a.sent();
                        return [2 /*return*/, quote];
                }
            });
        });
    };
    return LorConsumer;
}());
exports.LorConsumer = LorConsumer;
//Some code to verify locally, not needed in prod
// (async () => {
//   const sdk = new LorConsumer("https://the-one-api.dev/v2");
//   try {
//     const movies = await sdk.get_movies();
//     console.log(movies);
//     const movie = await sdk.get_movie("5cd95395de30eff6ebccde5c");
//     console.log(movie);
//     const quote = await sdk.get_movie_quote("5cd95395de30eff6ebccde5c");
//     console.log(quote);
//   } catch (error) {
//     console.error(error);
//   }
// })();
