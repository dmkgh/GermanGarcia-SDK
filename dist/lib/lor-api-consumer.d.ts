export declare class LorConsumer {
    private base_url;
    constructor(base_url: string);
    get_movies(): Promise<[]>;
    get_movie(movieid: string): Promise<[]>;
    get_movie_quote(movieid: string): Promise<[]>;
}
