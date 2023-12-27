import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function handleKurang() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleTambah() {
    setCount(count + 1);
  }
  return (
    <section className="container">
      <h2 className="font-bold text-3xl mb-2">Counter</h2>
      <p className="mb-5">Untuk Belajar State di Reactjs</p>
      <div className="flex gap-3 items-center">
        {/* button tambah */}
        <button
          className="py-2 px-3 bg-slate-400 rounded"
          onClick={handleTambah}
        >
          tambah
        </button>

        {/* show count */}
        <div>
          <span>{count}</span>
        </div>

        {/* button kurang */}
        <button
          className="py-2 px-3 bg-slate-400 rounded"
          onClick={handleKurang}
        >
          kurang
        </button>
      </div>
    </section>
  );
}
