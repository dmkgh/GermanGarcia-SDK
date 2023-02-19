export declare class LorConsumer {
  private base_url: string;

  constructor(base_url: string);

  get_movies(): Promise<[]>;

  get_movie(movieid: string): Promise<any>;

  get_movie_quote(movieid: string): Promise<any>;
}
