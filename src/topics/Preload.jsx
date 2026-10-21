import { useState, useEffect } from "react";
function Preload() {
    const [showImage, setShowImage] = useState(false);

    const imageUrl =
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600";

    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;
    }, []);
    return (
        <div className="space-y-6 text-white">
            <p>Browser & Network Optimization means improving how a website loads and uses network resources so that it works faster and provides a better user experience.</p>

            <p className="leading-7">
                Preload is a browser technique that tells the browser to
                download an important resource early because the page will
                need it soon.
            </p>

            <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                <h2 className="mb-3 text-xl font-semibold">
                    Why Do We Use Preload?
                </h2>

                <ul className="list-disc space-y-2 pl-6 leading-7">
                    <li>To load important resources earlier.</li>
                    <li>To help important content appear sooner.</li>
                    <li>To reduce waiting for resources discovered late by the browser.</li>
                </ul>
            </section>

            {/* How it works */}
            <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                <h2 className="mb-3 text-xl font-semibold">
                    How Does Preload Work?
                </h2>

                <ol className="list-decimal space-y-2 pl-6 leading-7">
                    <li>The browser starts loading a webpage.</li>
                    <li>It finds a preload instruction in the HTML.</li>
                    <li>The browser starts downloading that resource early.</li>
                    <li>The resource can be ready when the page needs it.</li>
                </ol>
            </section>

            {/* Example */}
            <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                <h2 className="mb-3 text-xl font-semibold">
                    Example
                </h2>

                <p className="mb-4 leading-7">
                    Suppose a webpage needs a special font. We can tell the
                    browser to start downloading that font early.
                </p>

                <div className="overflow-x-auto rounded-lg bg-gray-800 p-4">
                    <pre className="whitespace-pre-wrap  text-sm">
                        <code>{`<link
  rel="preload"
  href="/fonts/my-font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>`}</code>
                    </pre>
                </div>

                <p className="mt-3 leading-7">
                    <strong>rel="preload"</strong> tells the browser to load
                    the resource early, while <strong>as="font"</strong> tells
                    it what type of resource it is.
                </p>
            </section>

            {/* Important points */}
            <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                <h2 className="mb-3 text-xl font-semibold">
                    Important Points
                </h2>

                <ul className="list-disc space-y-2 pl-6 leading-7">
                    <li>Preload is used for important resources needed soon.</li>
                    <li>It can be used for fonts, images, stylesheets, and scripts.</li>
                    <li>Preloading too many resources can waste bandwidth.</li>
                    <li>Use it only when there is a clear performance benefit.</li>
                </ul>
            </section>

            <section className="rounded-xl border bg-gray-900 p-5">
                <h2 className="mb-3 text-xl font-semibold">
                    Live Example: Preload Image
                </h2>

                <p className="mb-4">
                    The browser starts downloading this image when the component loads.
                </p>

                <button
                    onClick={() => setShowImage(!showImage)}
                    className="rounded-lg bg-blue-600 px-4 py-2"
                >
                    {showImage ? "Hide Image" : "Show Image"}
                </button>

                {showImage && (
                    <img
                        src={imageUrl}
                        alt="Nature landscape"
                        className="mt-4 w-full max-w-md rounded-lg"
                    />
                )}
            </section>

            {/* Conclusion */}
            <section className=" p-5">
                <h2 className="mb-3 text-xl font-semibold">
                    Conclusion
                </h2>

                <p className="leading-7">
                    Preload helps the browser start downloading important
                    resources before they are needed by the webpage.
                </p>

                <div className="mt-4 rounded-lg bg-gray-800 p-4">
                    <p className="font-semibold">
                        Easy to Remember
                    </p>
                    <p className="mt-2 leading-7">
                        Preload = Download an important resource early.
                    </p>
                </div>
            </section>

        </div>
    );
}

export default Preload