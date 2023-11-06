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

async function fetchGraphQL(query: string): Promise<any> {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query })
        }
    ).then((response) => response.json());
}

function extractBook(fetchResponse: any): any {
    return fetchResponse?.data?.bookCollection?.items?.[0];
}

function extractAuthor(fetchResponse: any): any[] {
    return fetchResponse?.data?.authorCollection?.items?.[0];
}

export async function getBookBySlug(slug: string | null): Promise<any> {
    const entry = await fetchGraphQL(
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

export async function getAuthorBySlug(slug: string | null): Promise<any> {
    const entry = await fetchGraphQL(
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

