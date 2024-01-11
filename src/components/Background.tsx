import Image from "next/image";

export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={"/theatre-pic.jpg"}
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}
