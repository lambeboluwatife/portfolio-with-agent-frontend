import Image from "next/image";

const Icon = () => {
  return (
    <div className="flex items-center justify-center w-30 h-30 bg-light dark:bg-[#171717]/60 hover:bg-[#00ff00] rounded-full">
      <Image
        src="/images/lbd.jpg"
        width={100}
        height={100}
        className="object-fit"
      />
    </div>
  );
};

export default Icon;
