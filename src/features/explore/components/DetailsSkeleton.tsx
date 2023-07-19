export function DetailsSkeleton() {
  return (
    <div className="container py-10">
      <div className="w-[100px] h-10 my-4 skeleton"></div>
      <div className="grid grid-cols-3 gap-6">
        <div className="w-full h-[450px] skeleton"></div>
        <div className="w-full h-[450px] skeleton"></div>
        <div className="w-full h-[450px] skeleton"></div>
      </div>
    </div>
  );
}
