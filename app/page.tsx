import { Suspense } from "react";
import Book from "@/components/Book";
import Loading from "./loading";

export default function Homepage() {
    return (
        <section>
            <div className="px-5">
                <h1 className="pt-5 text-6xl font-semibold">Book <span className="flex text-amber-50 text-shadow">of the day.</span></h1>
                <Suspense fallback={<Loading />}>
                    <Book />
                </Suspense>
            </div>
        </section>
    );
}
