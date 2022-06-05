import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ post }) {
    const router = useRouter();
    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    console.log(router);
    return (
        <>
            <Link href={"/"}>Home</Link>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </>
    )
}
export async function getStaticPaths() {
    // const response = await fetch("http://localhost:8000/blog/posts");
    // const data = await response.json();
    // const posts = data.data;
    // const paths = posts.map(post => {
    //     return {

    //         params: { postId: `${post.token}` }
    //     }


    // })
    return {
        paths: [
            {
                params: { postId: "96260esSbsPTxAlFo96661" }
            },
            {
                params: { postId: "87879AdTooPTLGeqe43845" }
            },
            {
                params: { postId: "84566BMfhvPTXCNwT38576" }
            },
        ],
        // paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const { params } = context;

    const response = await fetch(`http://localhost:8000/blog/post/${params.postId}`);
    const data = await response.json();
    console.log(data)
    return {
        props: {
            post: data.data
        }
    }
}