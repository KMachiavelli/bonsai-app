import { RecentDataDisplay } from "@/components/home-page/recent-data-display";
import { Scene } from "@/components/home-page/scene";

export default async function Home() {
  return (
    <main>
      <div className="relative max-w-screen-sm m-auto h-screen w-full">
        <Scene />
        <RecentDataDisplay />
      </div>
    </main>
  );
}
