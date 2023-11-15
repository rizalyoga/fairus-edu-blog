export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen flex justify-center items-center bg-base-100 bg-opacity-75 backdrop-opacity rounded-md">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
}
