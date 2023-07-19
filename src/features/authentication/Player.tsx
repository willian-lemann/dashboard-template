import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export function Player() {
  return (
    <div className="w-full h-full">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=IXYnN0Sbp9c"
        height="100%"
        width="100%"
        playing
        autoPlay={true}
        muted={true}
      />
    </div>
  );
}
