import { useRouter } from "next/router";
import Link from "next/link";

function Home() {
    const router = useRouter();
    function clickHandler() {
        console.log("Placing Your Order");
        router.push("/product")
    }
    return (
        <>
            <h1>Home Page</h1>
           
            <br/>
            <button onClick={clickHandler}>Place Order</button>
        </>
    )
}

export default Home;