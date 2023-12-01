import { MeasurementsLayer } from "@/components/home-page/measurements-layer";
import { Scene } from "@/components/home-page/scene";
import { TextDisplay } from "@/components/shared/text-display";
import prisma from "@/lib/db";

export default async function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="relative max-w-screen-sm m-auto h-full w-full">
        <Scene />
        <MeasurementsLayer />
      </div>
    </main>
  );
}
