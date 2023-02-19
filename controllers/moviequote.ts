//import { MovieQuote } from "../models/moviequote";
import { fetchutil } from "../utils/fetch";

export class MovieQuoteController {
  private base_url: string;
  private movie_id: string;

  constructor(base_url: string, movieid: string) {
    this.movie_id = movieid;
    this.base_url = base_url;
  }

  async get_moviequote(): Promise<[]> {
    const url = `${this.base_url}/movie/${this.movie_id}/quote`;
    const response = await fetchutil(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer N6aY7aPQ-oC8B_TYpNo8",
      },
    });
    const quote = await response.json();
    return quote;
  }
}
