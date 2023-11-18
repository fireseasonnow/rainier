"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getBookRandom } from "@/lib/api";
import type { Book } from "@/types/content-types";

export default function Book() {
    const [book, setBook] = useState<Book>({});

    const { title, img } = book;

    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            const json = await getBookRandom();

            if (!ignore) {
                setBook(json);
            }
        }

        startFetching();

        return () => {
            ignore = true;
        };
    }, []);

    if (!Object.keys(book).length) {
        return null;
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">{`Hello book ${title}!`}</h1>

            {img &&
                <Image
                    src={img.url}
                    width={img.width}
                    height={img.height}
                    alt={img.title}
                />}
        </>
    );
}
