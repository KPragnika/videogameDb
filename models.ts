export interface Game{
    image_background:string;
    name:string;
    game_count:string;
    metacritic:number;
    year_end: string;
    year_start: string;
    id:string;
}

export interface APIResponse<T>{
    results: Array<T>;
}

