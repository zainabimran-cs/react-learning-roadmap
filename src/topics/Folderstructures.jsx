function Folderstructures() {

  return (
    <div className="space-y-3  text-white">
      
        <p>
          Folder structure means organizing project files and folders
          in a clear way. It makes code easier to find, understand,
          maintain, and reuse.
        </p>
 
      <section >
        <h2 className="mb-3 text-xl font-semibold">
          Important Files
        </h2>

        <ul className="list-inside list-disc space-y-3">
          <li>
            <strong>App.jsx:</strong> Usually contains the main app
            component and combines other components.
          </li>
          <li>
            <strong>main.jsx:</strong> Entry point that renders the
            React app into the HTML page.
          </li>
          <li>
            <strong>package.json:</strong> Contains project information,
            dependencies, and scripts.
          </li>
          <li>
            <strong>.env:</strong> Stores environment configuration values.
          </li>
          <li>
            <strong>vite.config.js:</strong> Contains Vite configuration.
          </li>
        </ul>
      </section>

      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Benefits of Good Folder Structure
        </h2>

        <ul className="list-inside list-disc space-y-2">
          <li>Makes files easy to find.</li>
          <li>Keeps code organized.</li>
          <li>Encourages component reuse.</li>
          <li>Makes large projects easier to maintain.</li>
          <li>Helps team members understand the project.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="rounded-lg border border-blue-500 bg-gray-900 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Remember
        </h2>

        <p>
          A good folder structure keeps related files together and
          makes a React project easier to understand and manage.
        </p>
      </section>
    </div>
  );
}

export default Folderstructures;
