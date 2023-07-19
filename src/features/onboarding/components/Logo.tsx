import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-10 w-10">
        <Image
          src="/logo-livng.png"
          alt="logo image"
          fill
          className="object-cover"
        />
      </div>

      <span className="text-white text-base uppercase">Livng</span>
    </div>
  );
}
