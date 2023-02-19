import { fetchutil } from "../utils/fetch";

export class MovieController {
  private base_url: string;
  private movie_id: string;

  constructor(base_url: string, movieid: string) {
    this.base_url = base_url;
    this.movie_id = movieid;
  }

  async get_movie(): Promise<[]> {
    const url = `${this.base_url}/movie/${this.movie_id}`;
    const response = await fetchutil(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer N6aY7aPQ-oC8B_TYpNo8",
      },
    });
    const movie = await response.json();
    return movie;
  }
}
