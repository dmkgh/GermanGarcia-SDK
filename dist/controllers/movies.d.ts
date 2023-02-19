export declare class MoviesController {
    private base_url;
    constructor(base_url: string);
    get_movies(): Promise<[]>;
}
