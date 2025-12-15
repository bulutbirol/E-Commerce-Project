import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Star = ({ on }) => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const IconBtn = ({ children, ariaLabel }) => (
    <button
        aria-label={ariaLabel}
        className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
        type="button"
    >
        {children}
    </button>
);

const HeartIcon = () => (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 21s-7.2-4.35-9.6-8.7C.72 9.22 2.4 5.8 5.9 5.1c1.9-.38 3.6.35 4.6 1.62 1-1.27 2.7-2 4.6-1.62 3.5.7 5.18 4.12 3.5 7.2C19.2 16.65 12 21 12 21Z" />
    </svg>
);

const CartIcon = () => (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.2 6h15.6a1 1 0 0 1 .97 1.24l-1.6 6A2 2 0 0 1 19.23 15H8.01a2 2 0 0 1-1.94-1.52L4.28 4H2V2h3.1a1 1 0 0 1 .98.8L6.2 6Z" />
    </svg>
);

const EyeIcon = () => (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 5c5.5 0 9.8 4.2 11 7-1.2 2.8-5.5 7-11 7S2.2 14.8 1 12c1.2-2.8 5.5-7 11-7Zm0 2c-4.3 0-7.8 3.2-8.9 5 1.1 1.8 4.6 5 8.9 5s7.8-3.2 8.9-5c-1.1-1.8-4.6-5-8.9-5Zm0 2.5A2.5 2.5 0 1 1 12 14a2.5 2.5 0 0 1 0-5Z" />
    </svg>
);

export default function ProductDetail() {
    const { productId } = useParams();

    const products = useMemo(
        () => [
            {
                id: "1",
                title: "Floating Phone",
                price: 1139.33,
                rating: 4,
                reviewsCount: 10,
                inStock: true,
                description:
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent nostrum met.",
                images: [
                    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
                    "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80",
                    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
                ],
                thumbs: [
                    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=240&q=80",
                    "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=240&q=80",
                    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=240&q=80",
                ],
            },
        ],
        []
    );

    const product = useMemo(() => products.find((p) => String(p.id) === String(productId)) || products[0], [products, productId]);

    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState("description");
    const [color, setColor] = useState("blue");

    const colors = [
        { key: "blue", cls: "bg-sky-500" },
        { key: "green", cls: "bg-emerald-500" },
        { key: "orange", cls: "bg-orange-500" },
        { key: "dark", cls: "bg-slate-800" },
    ];

    const prev = () => setActiveImage((p) => (p - 1 + product.images.length) % product.images.length);
    const next = () => setActiveImage((p) => (p + 1) % product.images.length);

    return (
        <div className="bg-white">
            <div className="mx-auto w-full max-w-[1120px] px-6 py-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Link to="/" className="text-slate-800 hover:opacity-80">
                        Home
                    </Link>
                    <span className="opacity-60">›</span>
                    <Link to="/shop" className="hover:opacity-80">
                        Shop
                    </Link>
                </div>

                <section className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_.9fr]">
                    <div>
                        <div className="relative overflow-hidden rounded-md border border-slate-100 bg-slate-100">
                            <img src={product.images[activeImage]} alt={product.title} className="h-[420px] w-full object-cover md:h-[460px]" />

                            <button
                                onClick={prev}
                                aria-label="Previous image"
                                className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-2xl text-slate-600 hover:bg-white"
                                type="button"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                aria-label="Next image"
                                className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-2xl text-slate-600 hover:bg-white"
                                type="button"
                            >
                                ›
                            </button>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                            {product.thumbs.map((t, idx) => (
                                <button
                                    key={t}
                                    onClick={() => setActiveImage(idx)}
                                    aria-label={`Select image ${idx + 1}`}
                                    className={[
                                        "h-[72px] w-[72px] overflow-hidden rounded-md border bg-white",
                                        idx === activeImage ? "border-sky-500 ring-4 ring-sky-500/15" : "border-slate-200 hover:border-slate-300",
                                    ].join(" ")}
                                    type="button"
                                >
                                    <img src={t} alt="" className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-1">
                        <h1 className="text-[26px] font-semibold tracking-tight text-slate-800">{product.title}</h1>

                        <div className="mt-2 flex items-center gap-3">
                            <div className="flex items-center gap-1 text-amber-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} on={i < product.rating} />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-500">{product.reviewsCount} Reviews</span>
                        </div>

                        <div className="mt-3 text-2xl font-extrabold text-slate-800">
                            {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                        </div>

                        <div className="mt-2 text-sm font-bold text-slate-500">
                            Availability :{" "}
                            <span className={product.inStock ? "text-sky-500" : "text-rose-500"}>
                                {product.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-500">{product.description}</p>

                        <div className="my-5 h-px w-full bg-slate-200" />

                        <div className="flex items-center gap-3">
                            {colors.map((c) => (
                                <button
                                    key={c.key}
                                    onClick={() => setColor(c.key)}
                                    aria-label={c.key}
                                    className={[
                                        "h-[26px] w-[26px] rounded-full outline outline-1 outline-black/10",
                                        c.cls,
                                        c.key === color ? "ring-4 ring-sky-500/20" : "",
                                    ].join(" ")}
                                    type="button"
                                />
                            ))}
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <button className="h-11 rounded-md bg-sky-500 px-5 text-sm font-extrabold text-white hover:brightness-95" type="button">
                                Select Options
                            </button>

                            <IconBtn ariaLabel="Add to wishlist">
                                <HeartIcon />
                            </IconBtn>
                            <IconBtn ariaLabel="Add to cart">
                                <CartIcon />
                            </IconBtn>
                            <IconBtn ariaLabel="Quick view">
                                <EyeIcon />
                            </IconBtn>
                        </div>
                    </div>
                </section>

                <section className="mt-12 border-t border-slate-200 pt-8">
                    <div className="flex items-center justify-center gap-10 text-sm font-semibold text-slate-500">
                        <button
                            type="button"
                            onClick={() => setActiveTab("description")}
                            className={activeTab === "description" ? "text-slate-800" : "hover:text-slate-700"}
                        >
                            Description
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("additional")}
                            className={activeTab === "additional" ? "text-slate-800" : "hover:text-slate-700"}
                        >
                            Additional Information
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("reviews")}
                            className={activeTab === "reviews" ? "text-emerald-700" : "hover:text-slate-700"}
                        >
                            Reviews <span className="text-emerald-700">(0)</span>
                        </button>
                    </div>

                    <div className="mx-auto mt-6 h-px w-full max-w-[860px] bg-slate-200" />

                    {activeTab === "description" && (
                        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr_1fr]">
                            <div className="overflow-hidden rounded-md">
                                <img
                                    className="h-[360px] w-full object-cover"
                                    alt="room"
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800">the quick fox jumps over</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent nostrum met.
                                </p>
                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent nostrum met.
                                </p>
                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent nostrum met.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800">the quick fox jumps over</h3>

                                <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="text-slate-400">›</span>
                                            the quick fox jumps over the lazy dog
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="mt-10 text-lg font-extrabold text-slate-800">the quick fox jumps over</h3>
                                <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="text-slate-400">›</span>
                                            the quick fox jumps over the lazy dog
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "additional" && (
                        <div className="mt-10 mx-auto max-w-[860px] text-sm leading-7 text-slate-500">
                            <div className="rounded-md border border-slate-200 p-5">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="flex items-center justify-between border-b border-slate-200 py-3 md:border-b-0 md:border-r md:pr-4">
                                        <span className="font-semibold text-slate-700">Brand</span>
                                        <span className="font-semibold text-slate-500">Bandage</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 md:pl-4">
                                        <span className="font-semibold text-slate-700">Material</span>
                                        <span className="font-semibold text-slate-500">Premium</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-slate-200 py-3 md:border-r md:pr-4">
                                        <span className="font-semibold text-slate-700">Weight</span>
                                        <span className="font-semibold text-slate-500">0.6 kg</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-slate-200 py-3 md:pl-4">
                                        <span className="font-semibold text-slate-700">Warranty</span>
                                        <span className="font-semibold text-slate-500">2 Years</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="mt-10 mx-auto max-w-[860px] rounded-md border border-slate-200 p-6">
                            <div className="text-sm font-semibold text-slate-700">No reviews yet.</div>
                            <div className="mt-2 text-sm text-slate-500">Be the first to review this product.</div>
                            <button type="button" className="mt-5 h-11 rounded-md bg-sky-500 px-5 text-sm font-extrabold text-white hover:brightness-95">
                                Write a Review
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
