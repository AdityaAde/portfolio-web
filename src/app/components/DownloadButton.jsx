import Link from "next/link";

const DownloadCVButton = () => {
  return (
    <Link href="/file/cv-adityaade.pdf" passHref>
      <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
        Download CV
      </button>
    </Link>
  );
};

export default DownloadCVButton;
