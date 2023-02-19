import { MoviesController } from "../controllers/movies";
import { MovieController } from "../controllers/movie";
import { MovieQuoteController } from "../controllers/moviequote";

// The LorConsumer class has a private property called base_url that represents the base URL of the movie API. It is passed as an argument to the constructor when creating a new instance of the class.
// Each of the three methods creates an instance of a controller class, passing in the base_url property to the constructor, and uses that instance to make a request to the movie API. The response data is then returned as a promise.
export class LorConsumer {
  private base_url: string;

  constructor(base_url: string) {
    this.base_url = base_url;
  }

  //retrieves a list of movies using the MoviesController class from the ../controllers/movies module.
  async get_movies() {
    const controller = new MoviesController(this.base_url);

    const movies = await controller.get_movies();
    return movies;
  }

  //retrieves a specific movie by ID using the MovieController class from the ../controllers/movie module.
  async get_movie(movieid: string) {
    const controller = new MovieController(this.base_url, movieid);

    const movie = await controller.get_movie();

    return movie;
  }

  //retrieves a random quote from a specific movie using the MovieQuoteController class from the ../controllers/moviequote module.
  async get_movie_quote(movieid: string) {
    const controller = new MovieQuoteController(this.base_url, movieid);

    const quote = await controller.get_moviequote();

    return quote;
  }
}

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
