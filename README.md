This code can be used as a client library for interacting with a movie API, allowing a developer to easily retrieve movie data and quotes in their application.

- USAGE

1- Install the package from the registry:
npm install liblabtesttypescrypt

2- Import into your project:
import { LorConsumer} from 'liblabtesttypescrypt';

3- Create an instance of the class LorConsumer and pass the url
const sdk = new LorConsumer("https://the-one-api.dev/v2");

4- Use the get_movies(), get_movie(movieid: string), or get_movie_quote(movieid: string) methods to retrieve data
const movies = await lorConsumer.get_movies();
const movie = await lorConsumer.get_movie('<movie-id>');//Replace movie-id with the actual id of the movie, you can find the id from the get_movies call
const quote = await lorConsumer.get_movie_quote('<movie-id>');////Replace movie-id with the actual id of the movie, you can find the id from the get_movies call
