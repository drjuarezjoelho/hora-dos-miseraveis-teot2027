/** Extrai um objeto JSON do texto do modelo (markdown ```json``` ou primeiro { ... }). */
export function parseJsonFromModelText(text: string): unknown {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) {
    t = fence[1].trim();
  }
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start < 0 || end <= start) {
    throw new Error("Nenhum objeto JSON encontrado na resposta do modelo");
  }
  const slice = t.slice(start, end + 1);
  return JSON.parse(slice) as unknown;
}
