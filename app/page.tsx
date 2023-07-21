import Link from "next/link";

const blogPosts = [
  { title: "First Post", slug: "first-post" },
  { title: "Second Post", slug: "second-post" },
  { title: "Third Post", slug: "third-post" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1>Hello! Oliver&apos;s blog here.</h1>
      </div> */}
      <h1 className="text-6xl font-bold">My Blog</h1>
      <div className="mt-12">
        <h2 className="text-4xl">Latest Posts</h2>
        <div className="space-y-6 mt-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="text-xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
