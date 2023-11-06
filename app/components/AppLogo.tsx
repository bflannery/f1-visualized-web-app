import { lusitana } from '@/app/styling/fonts';

export default function AppLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <p className="text-[44px]">F1 Visualized</p>
    </div>
  );
}
