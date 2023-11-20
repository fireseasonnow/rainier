import type { Author, AuthorResponse, Book, BookResponse } from "@/types/content-types";

const BOOK_GRAPHQL_FIELDS = `
    title
    author {
        firstName
        lastName
    }
    img {
        title
        url
        height
        width
    }
    year
    genres
`;

const AUTHOR_GRAPHQL_FIELDS = `
    firstName
    lastName
    bornDate
    bornPlace
    diedDate
    diedPlace
    img {
        title
        url
        height
        width
    }
    nationality
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchGraphQL(query: string): Promise<any> {
    try {
        const res = await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
                },
                body: JSON.stringify({ query }),
                cache: "no-store"
            });

        if (res.ok) {
            return res.json();
        }

        console.error("Network response was not ok");
        return null;
    } catch (err) {
        console.error("Error fetching data from GraphQL:", err);
        return null;
    }
}

function extractBook(fetchResponse: BookResponse): Book {
    return fetchResponse?.data?.bookCollection?.items?.[0];
}

function extractBookTotal(fetchResponse: BookResponse): number {
    return fetchResponse?.data?.bookCollection?.total;
}

function extractAuthor(fetchResponse: AuthorResponse): Author {
    return fetchResponse?.data?.authorCollection?.items?.[0];
}

export async function getBookBySlug(slug: string | null): Promise<Book> {
    const entry: BookResponse = await fetchGraphQL(
        `query {
            bookCollection(where: { slug: "${slug}" }) {
                items {
                    ${BOOK_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    return extractBook(entry);
}

async function getBookTotal(): Promise<number> {
    const entry: BookResponse = await fetchGraphQL(
        `query {
            bookCollection {
                total
            }
        }`
    );

    return extractBookTotal(entry);
}

export async function getBookRandom(): Promise<Book> {
    const bookTotal = await getBookTotal();
    const randomNumber = getRandomNumber(bookTotal);

    const entry: BookResponse = await fetchGraphQL(
        `query {
            bookCollection(skip: ${randomNumber - 1}, limit: ${randomNumber}) {
                items {
                    ${BOOK_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    return extractBook(entry);
}

export async function getAuthorBySlug(slug: string | null): Promise<Author> {
    const entry: AuthorResponse = await fetchGraphQL(
        `query {
            authorCollection(where: { slug: "${slug}" }) {
                items {
                    ${AUTHOR_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    return extractAuthor(entry);
}

const getRandomNumber = (max: number): number => {
    let randomNumber = 0;

    while (randomNumber === 0) {
        randomNumber = Math.floor(Math.random() * max) + 1;
    }

    return randomNumber;
};

