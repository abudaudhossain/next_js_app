import Link from "next/link";

export default function Blog({ posts }) {
    console.log(posts)
    return (
        <>
            <h1>All Post List</h1>
            <hr />
            <hr />
            <hr />
            {
                posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <a href={`/blog/${post.token}`}>
                                <h2>{index} {post.title}</h2>
                            </a>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:8000/blog/posts");
    const data = await response.json();

    return {
        props: {
            posts: data.data
        }
    }
}
