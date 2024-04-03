import { Search } from "lucide-react";
export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
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

      <div className=" border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de Data do check-in
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map(() => {
              return (
                <tr className="border-b border-white/10" key={Math.random()}>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">12312</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Leticia Vieira
                      </span>
                      <span>leticia@email.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300"></td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td
              className="py-3 px-4 text-sm text-zinc-300 text-right"
              colSpan={3}
            >
              Página 1 de 10
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
