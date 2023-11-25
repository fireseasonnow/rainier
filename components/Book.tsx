import Image from "next/image";
import type { Book } from "@/types/content-types";
import { getBookRandom } from "@/lib/api";
import { blurDataURL } from "utils/imageUtils";

export default async function Book() {
    const { title, author, img }: Book = await getBookRandom();

    return (
        <>
            {img &&
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
            }

            <div>
                <h2 className="pt-5 text-xl">{title}</h2>
                <p>{`by ${author?.firstName} ${author?.lastName}`}</p>
            </div>
        </>
    );
}
