import { ArrowLeftCircle } from "lucide-react";

export default function PageHeader({ title, onBack }) {
  return (
    <div className="flex items-center gap-2 bg-white shadow-md rounded-full px-5 py-3 w-fit mt-4 ml-4">
      <button
        onClick={onBack}
        className="rounded-full p-1 hover:bg-gray-100 transition"
      >
        <ArrowLeftCircle size={26} strokeWidth={2.5} color="#2e7d32" />
      </button>

      <span className="text-lg font-medium text-gray-800">{title}</span>
    </div>
  );
}
