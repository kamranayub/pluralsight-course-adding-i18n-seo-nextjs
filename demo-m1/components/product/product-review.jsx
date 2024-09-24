export function ProductReview({ review }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold">{review.title}</h3>
      <div className="flex items-center gap-2">
        <h4 className="text-sm font-bold">{review.author}</h4>
        <div className="flex">
          {Array.from({ length: review.rating }, (_, index) => (
            <svg
              key={index}
              className="h-4 w-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.343 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
          ))}
        </div>
      </div>

      <p>{review.body}</p>
    </div>
  );
}
