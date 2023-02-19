export declare class MovieQuoteController {
    private base_url;
    private movie_id;
    constructor(base_url: string, movieid: string);
    get_moviequote(): Promise<[]>;
}
