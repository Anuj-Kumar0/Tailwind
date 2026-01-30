import { useState } from "react";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, title: "React", description: "A JavaScript library for building UI." },
    { id: 2, title: "Tailwind", description: "A utility-first CSS framework." },
    { id: 3, title: "Vite", description: "A fast frontend build tool." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Items</h2>

          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {items.map((item) => (
              <li key={item.id}>
                <ItemCard
                  item={item}
                  onSelect={() => setSelectedItem(item)}
                />
              </li>
            ))}
          </ul>
        </section>

        {selectedItem && (
          <Modal onClose={() => setSelectedItem(null)}>
            <h3 className="text-xl font-bold mb-2">
              {selectedItem.title}
            </h3>
            <p className="text-gray-600">
              {selectedItem.description}
            </p>
          </Modal>
        )}
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">My React App</h1>
        <p className="text-gray-500 mt-1">
          Try applying Tailwind to style this layout.
        </p>
      </div>
    </header>
  );
}

function ItemCard({ item, onSelect }) {
  return (
    <article
      onClick={onSelect}
      className="cursor-pointer rounded-lg bg-white p-4 shadow hover:shadow-lg transition-shadow border border-gray-100"
    >
      <h3 className="text-lg font-semibold mb-1">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {item.description}
      </p>
    </article>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
