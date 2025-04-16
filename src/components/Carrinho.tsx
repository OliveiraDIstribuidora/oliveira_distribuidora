export function Carrinho({ items, onRemove }: { items: any[], onRemove: (id: number) => void }) {
  const mensagem = encodeURIComponent(items.map(p => `${p.name} - R$ ${p.price}`).join('\n'));
  return (
    <section className="p-4 border-t">
      <h2 className="text-lg font-bold mb-2">Carrinho</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.name}</span>
            <button onClick={() => onRemove(item.id)} className="text-red-500">Remover</button>
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/5599672-8327?text=${mensagem}`}
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2"
        target="_blank"
      >
        Finalizar Compra no WhatsApp
      </a>
    </section>
  );
}