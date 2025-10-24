import Gallery from "@/components/shared/Gallery";
import { ProfileTab } from "@/components/shared/ProfileTab";

export default function Home() {
  return (
    <div className="py-10 md:px-auto md:px-6 px-2">
      <div className="md:flex gap-10 justify-between">
        <div
          className="w-full rounded-2xl"
          style={{
            boxShadow:
              "0 -1px 3px rgba(255,255,255,0.6), 10px 8px 12px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="p-10 text-3xl text-white font-bold">
            Welcome to my Profile
          </h1>
        </div>
        <div>
          <ProfileTab />
          <hr className="w-3/5 h-1 mx-auto border-0 bg-gray-600 rounded-2xl" />
          <hr className="w-3/5 h-1 mx-auto border-0 bg-gray-900 rounded-2xl" />
          <Gallery />
          <hr className="w-3/5 h-1 mx-auto border-0 bg-gray-600 rounded-2xl" />
          <hr className="w-3/5 h-1 mx-auto border-0 bg-gray-900 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
