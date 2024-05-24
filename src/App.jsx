import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white font-mono">
      <header className="absolute top-0 flex items-center justify-between p-8 w-full">
        <h1>
          <img
            src="/logo.jpg"
            alt=""
            className="w-10 h-10 inline-block align-middle"
          />{" "}
          ules
        </h1>
        <div className=""></div>
        <nav className="flex gap-4">
          <a href="" className="px-6 p-3 rounded-full bg-white text-black">
            about
          </a>
          <a href="" className="px-6 p-3 rounded-full bg-white text-black">
            sponsorship
          </a>
          <a href="" className="px-6 p-3 rounded-full bg-white text-black">
            blog
          </a>
          <a href="" className="px-6 p-3 rounded-full bg-white text-black">
            contact
          </a>
          <a href="" className="px-6 p-3 rounded-full bg-blue-500 text-white">
            join us
          </a>
        </nav>
      </header>
      <div className="flex h-full items-center  p-4 gap-10">
        <div className="flex-1 flex flex-col gap-6">
          <p>shapig the future with green materials</p>
          <p className="text-6xl capitalize">
            a student <span className="text-blue-500">society</span> of aspiring
            engineers
          </p>
          <div className="flex gap-3">
            <button className="rounded-full border px-6 p-3">button</button>
            <button className="rounded-full border px-6 p-3">
              another button
            </button>
          </div>
        </div>
        <div className="flex-1 h-full">
          <img
            src="/bench.jpg"
            alt=""
            className="rounded-3xl object-cover h-full"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
