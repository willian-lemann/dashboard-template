import Image from "next/image";

type ImageGalleryProps = {
  photos?: string[];
};

export default function ImageGallery({ photos }: ImageGalleryProps) {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {photos?.map((photo) => (
        <div
          key={photo}
          className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
        >
          <Image
            src={photo}
            alt="Foto de um apartamento"
            className="h-full w-full object-cover object-center"
            fill
          />
        </div>
      ))}
    </div>
  );
}
