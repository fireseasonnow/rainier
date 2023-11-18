import { Suspense } from "react";
import Book from "@/components/Book";

export default function Posts() {
    return (
        <section>
            <Suspense fallback={<p>Loading book...</p>}>
                <Book />
            </Suspense>
        </section>
    );
}
