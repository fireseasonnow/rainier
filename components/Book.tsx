import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types/content-types";
import { getBookRandom } from "@/lib/api";
import { blurDataURL } from "utils/imageUtils";

export default async function Book() {
    const { title, author, img, slug }: Book = await getBookRandom();

    return (
        <>
            {img &&
                <Link href={`/book/${slug}`}>
                    <div className="flex justify-center pt-5">
                        <div className="w-1/2 max-w-xs">
                            <Image
                                src={img.url}
                                width={img.width}
                                height={img.height}
                                alt={img.title}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                            />
                        </div>
                    </div>
                </Link>

            }

            <div className="flex justify-center">
                <div>
                    <Link href={`/book/${slug}`}>
                        <h2 className="pt-5 text-xl underline">{title}</h2>
                    </Link>

                    <Link href={`/author/${author?.slug}`}>
                        <p>by <span className="underline">{author?.firstName} {author?.lastName}</span></p>
                    </Link>
                </div>
            </div>
        </>
    );
}
