import { Suspense } from "react";
import Book from "@/components/Book";
import Loading from "./loading";

export default function Homepage() {
    return (
        <section className="px-5 md:px-10">
            <h1 className="pt-6 text-6xl font-semibold md:pt-12 md:text-center">Book <span className="inline-flex text-amber-50 text-shadow">of the day.</span></h1>
            <Suspense fallback={<Loading />}>
                <Book />
            </Suspense>
        </section>
    );
}
