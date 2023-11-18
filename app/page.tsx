import { Suspense } from "react";
import Book from "@/components/Book";
import Loading from "./loading";

export default function Homepage() {
    return (
        <section>
            <Suspense fallback={<Loading />}>
                <Book />
            </Suspense>
        </section>
    );
}
