function CacheStorage() {
  return (
    <div className=" p-5 text-white">
      <div>
        <p>
          Cache Storage saves copies of website files in the browser
          so they can be used again later.
        </p>
      </div>

      <div>
        <h2 className="my-2 text-lg font-semibold">Why Do We Use It?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To make websites load faster.</li>
          <li>To save copies of website files.</li>
          <li>To help websites work offline.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>The browser loads a website file.</li>
          <li>A copy of the file is saved in Cache Storage.</li>
          <li>The saved copy can be used again later.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Simple Example</h2>
        <p>
          For example, a website can save an image in Cache Storage.
          Later, the saved image can be used again without downloading
          it every time.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Points</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Cache Storage saves website files.</li>
          <li>It can help improve website loading speed.</li>
          <li>Offline use requires extra code to manage cached files.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          Cache Storage saves website files so they can be reused
          later and may help a website load faster.
        </p>
      </div>

    </div>
  );
}

export default CacheStorage;
