import { fetchutil } from "../utils/fetch";

export class MoviesController {
  private base_url: string;

  constructor(base_url: string) {
    this.base_url = base_url;
  }

  async get_movies(): Promise<[]> {
    const url = `${this.base_url}/movie`;
    const response = await fetchutil(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer N6aY7aPQ-oC8B_TYpNo8",
      },
    });
    const movies = await response.json();
    return movies;
  }
}
