import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-8 w-screen bg-black text-white font-mono">
      <div className="h-screen">
        <header className="absolute hidden lg:flex top-0  items-center justify-between p-8 w-full">
          <h1>
            <img
              src="/logo.png
              "
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
              events
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
        <div className="flex flex-col lg:flex-row h-full items-center  p-4 gap-10">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <p>shapig the future with green materials</p>
            <p className="lg:text-6xl text-3xl font-bold capitalize">
              a student <span className="text-blue-500">society</span> of
              aspiring engineers
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
      </div>
      <div className="w-full p-3">
        <p className="lg:text-5xl text-2xl max-w-3xl mx-auto text-center">
          were not just building talent - were building students of change
        </p>
        <div className="flex flex-col lg:flex-row lg:h-[300px] w-full gap-3 p-4">
          <img
            src="/square.jpg"
            alt=""
            className="flex-2 object-cover rounded-3xl"
          />
          <img
            src="/bench.jpg"
            alt=""
            className="flex-auto object-cover rounded-3xl"
          />
          <img
            src="/ui2.png"
            alt=""
            className="flex-2 object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
