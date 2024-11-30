import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
      <Image
        src="https://media.licdn.com/dms/image/v2/D4D03AQFhgtG6cc50gQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667741348068?e=1738195200&v=beta&t=WwFh2DvmvozH_oDV2fkCCOgGcl4K0E1XsX-HFE7xfCE"
        width={128}
        height={128}
        alt="logo"
        className="rounded-full"
      />
      <p className="text-2xl font-bold">Ege Yapıcı</p>
    </div>
  );
}
