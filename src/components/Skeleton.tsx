export function Skeleton() {
  return (
    <div className="container py-10">
      <div className=" grid grid-cols-3 gap-6">
        <div className="w-full h-[450px] bg-gray-300/30 rounded-md animate-pulse"></div>
        <div className="w-full h-[450px] bg-gray-300/30 rounded-md animate-pulse"></div>
        <div className="w-full h-[450px] bg-gray-300/30 rounded-md animate-pulse"></div>
        <div className="w-full h-[450px] bg-gray-300/30 rounded-md animate-pulse"></div>
        <div className="w-full h-[450px] bg-gray-300/30 rounded-md animate-pulse"></div>
        <div className="w-full h-[450px] bg-gray-300/30 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
