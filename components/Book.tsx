import Image from "next/image";
import type { Book } from "@/types/content-types";
import { getBookRandom } from "@/lib/api";
import { blurDataURL } from "utils/image";

export default async function Book() {
    const { title, img }: Book = await getBookRandom();

    return (
        <>
            <h1 className="text-3xl font-bold underline">{`Hello book ${title}!`}</h1>

            {img &&
                <Image
                    src={img.url}
                    width={img.width}
                    height={img.height}
                    alt={img.title}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />}
        </>
    );
}
