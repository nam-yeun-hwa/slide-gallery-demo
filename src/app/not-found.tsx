import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-8 text-gray-500">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link href="/">
        <button
          style={{ backgroundColor: "#0099ff" }}
          className="px-4 py-3 text-white transition rounded-lg hover:bg-blue-700"
        >
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
}
