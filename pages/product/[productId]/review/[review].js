import { useRouter } from 'next/router'

export default function Review() {
    const router = useRouter();
    const { review, productId } = router.query
    return <h1>Review {review} For Product {productId}</h1>
}