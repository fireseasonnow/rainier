export type Author = {
    firstName?: string;
    lastName?: string;
    img?: Image;
    bornPlace?: string;
    diedPlace?: string;
    nationality?: string;
    bornDate?: string;
    diedDate?: string;
    slug?: string;
}

export type Book = {
    title?: string;
    author?: Author;
    img?: Image;
    year?: number;
    genres?: string[];
    slug?: string;
}

export type Image = {
    title: string;
    url: string;
    width: number;
    height: number;
}

export type AuthorResponse = {
    data: AuthorCollection
}

export type AuthorCollection = {
    authorCollection: AuthorCollectionItems
}

export type AuthorCollectionItems = {
    items: Author[]
}

export type BookResponse = {
    data: BookCollectionData
}

export type BookCollectionData = {
    bookCollection: BookCollection
}

export type BookCollection = {
    items: Book[],
    total: number
}
