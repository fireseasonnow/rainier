import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types/content-types";
import { getBookRandom } from "@/lib/api";
import { blurDataURL } from "utils/imageUtils";
import NewlineText from "utils/textUtils";

export default async function Book() {
    const { title, author, img, slug, description }: Book = await getBookRandom();

    return (
        <div className="justify-center pt-12 md:flex md:pt-20">
            <div className="max-w-5xl gap-10 md:flex">
                {img &&
                    <Link href={`/book/${slug}`} className="flex flex-1 justify-center md:justify-end">
                        <div className="max-w-[200px] md:max-w-xs">
                            <Image
                                src={img.url}
                                width={img.width}
                                height={img.height}
                                alt={img.title}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                            />
                        </div>
                    </Link>

                }

                <div className="md: flex-1 pt-12 md:pt-6">
                    <div>
                        <Link href={`/book/${slug}`}>
                            <h2 className="text-2xl underline">{title}</h2>
                        </Link>

                        <Link href={`/author/${author?.slug}`}>
                            <p>by <span className="text-xl underline">{author?.firstName} {author?.lastName}</span></p>
                        </Link>

                        <div className="pt-10 text-lg">
                            <NewlineText text={description} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
