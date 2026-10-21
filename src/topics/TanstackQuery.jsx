import { useQuery } from "@tanstack/react-query";

function Users() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            return response.json();
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;

    return (
        <div className="ml-15">
            <h2 className="font-bold">Users</h2>
            {data.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

function TanstackQuery() {
    return (
        <div className='text-white'>
            <p className='my-2'>TanStack Query is a library in React that helps us fetch, store, and manage data from APIs easily.</p>

            <p>When we get data from an API, we often need to handle loading, errors, and storing the received data.
                TanStack Query makes these tasks easier. It can also cache data, so we may not need to fetch the same data again.</p>

            <p className='font-bold mt-4'> Why do we use it?</p>
            <ul className='ml-4 list-disc'>
                <li>Fetching: Gets data from an API.</li>
                <li>Loading: Shows a message while data is loading.</li>
                <li>Error: Handles errors if the request fails.</li>
                <li>Caching: Keeps previously fetched data for reuse.</li>
                <li>Refetching: Can fetch updated data again when needed.</li>
            </ul>

            <p className='font-bold mt-4'>Steps:</p>
            <ul className='list-decimal ml-4'>
                <li>First, install the library: npm install @tanstack/react-query</li>
                <li>Then use it in your React component: import useQuery  from "@tanstack/react-query";</li>
                <li>Also wrap your app in QueryClientProvider and create a QueryClient.</li>
            </ul>
            <p className="font-bold mt-4">Demo:</p>
            <Users />

<p className="font-bold my-4">Remember: Async/Await helps us get the data. TanStack Query helps us manage that data more easily in React.</p>
        </div>
    )
}

export default TanstackQuery