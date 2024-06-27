import dynamic from "next/dynamic";

const UserInfo = dynamic(() => import("@/app/components/userInfo"), {
  ssr: false,
});
const Brain = dynamic(() => import("@/app/components/brain"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-4 sm:px-24 pt-4 mx-auto container">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl sm:text-4xl text-white mb-4 text-center">
          A deep dive into Chrome built in AI: Prompt API.
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <p className="text-white text-xl">
            This demo will not work unless you have followed the installation
            instructions for the Early Preview of Built in AI. It does not work
            on mobile browsers, or any non-dev versions of Chrome without the
            downloaded model. It is quite unstable, this is known. Check console
            and refresh where necessary.
          </p>
        </div>

        <div className="mb-4">
          <UserInfo />
        </div>
        <Brain />
      </div>
    </main>
  );
}
