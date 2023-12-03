import { RecentDataDisplay } from "@/components/home-page/recent-data-display";
import { Scene } from "@/components/home-page/scene";

export default async function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="relative max-w-screen-sm m-auto h-full w-full">
        <Scene />
        <RecentDataDisplay />
      </div>
    </main>
  );
}
