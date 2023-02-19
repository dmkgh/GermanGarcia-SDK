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
exports.MovieController = void 0;
const fetch_1 = require("../utils/fetch");
class MovieController {
    constructor(base_url, movieid) {
        this.base_url = base_url;
        this.movie_id = movieid;
    }
    get_movie() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.base_url}/movie/${this.movie_id}`;
            const response = yield (0, fetch_1.fetchutil)(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer N6aY7aPQ-oC8B_TYpNo8",
                },
            });
            const movie = yield response.json();
            return movie;
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movie.js.map