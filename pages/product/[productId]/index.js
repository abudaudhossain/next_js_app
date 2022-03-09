import {useRouter} from "next/router";

export default function ProductDetails(){
 const router = useRouter();
 const {productId} = router.query
    return <h1>Product {productId} Details Page</h1>
}
