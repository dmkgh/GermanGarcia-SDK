export declare class MovieController {
    private base_url;
    private movie_id;
    constructor(base_url: string, movieid: string);
    get_movie(): Promise<[]>;
}
