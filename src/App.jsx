import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white p-5 font-mono">
      <header className="absolute top-0 flex items-center justify-between">
        <h1>ules</h1>
        <div className=""></div>
        <nav></nav>
      </header>
      <div className="flex h-full items-center">
        <div className="flex-1 flex flex-col gap-3">
          <p></p>
          <p className="text-7xl capitalize font-bold">
            ules is a great society so you should probably join us
          </p>
          <div className="flex gap-2">
            <button className="rounded-full border px-4 p-2">button</button>
            <button className="rounded-full border px-4 p-2">
              another button
            </button>
          </div>
        </div>
        <div className="flex-1 h-full">
          <img
            src="/square.jpg"
            alt=""
            className="rounded-3xl object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
