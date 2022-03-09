import { useRouter } from "next/router"

export default function Details(){
    const router = useRouter();
    const id = router.query.productId
    return <h1>Product Details Pages {id}</h1>
}