export default function ReviewDetails({
  params,
}: {
  params: { productsId: string; reviewId: string };
}) {
    return (
        <h1>
            Review {params.reviewId} for Product {params.productsId} 
        </h1>
    )
}
