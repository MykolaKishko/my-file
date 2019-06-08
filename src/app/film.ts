export class Film { 
    name: string;
    poster: string;
    date: number;
    description: string;
    rating: number;
    locate: string;
    url: string;
    actors: string;
    director: string;
    category: string;
    id: number;
    like: boolean;
    views: number;
    view: boolean;
    comment: string[];
}


export class Comments {
    name: string;
    text: string;
}

export class MyFilm { 
    name: string;
    poster: string;
    date: number;
    description: string;
    rating: number;
    locate: string;
    url: string;
    actors: string;
    director: string;
    category: string;
    id: number;
    like: boolean;
    views: number;
    view: boolean;
    comment: string[];
}

export class LikeFilm { 
    name: string;
    poster: string;
    date: number;
    description: string;
    rating: number;
    locate: string;
    url: string;
    actors: string;
    director: string;
    category: string;
    id: number;
    like: boolean;
    views: number;
    view: boolean;
    comment: string[];
}
    
export class News {
    id: number;
    view: boolean;
    title: string;
    text: string;
    poster: string;
    like: boolean;
    comment:  string[];
}

export class MyNews {
    id: number;
    view: boolean;
    title: string;
    text: string;
    poster: string;
    like: boolean;
}

export class LikeNews {
    id: number;
    view: boolean;
    title: string;
    text: string;
    poster: string;
    like: boolean;
}

export class SoonFilms {
    id: number;
    poster: string;
    name: string;
}