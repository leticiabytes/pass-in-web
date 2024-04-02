import { Search } from "lucide-react";
export function AttendeeList() {
  return (
    <div className="flex gap-3 items-center">
      <div className="text-2xl font-bold">Participantes</div>
      <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
        <Search className="size-4 text-emerald-300" />
        <input
          type="text"
          placeholder="Buscar participante"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
    </div>
  );
}
