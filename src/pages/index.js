const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 py-24">
      <div className="text-center space-y-3 px-4 md:px-0">
        <h6 className="text-xs uppercase tracking-widest">
          Hire with Confidence
        </h6>

        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
          Works out of the box
        </h1>

        <p className="text-sm md:text-base max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-16 md:mt-32 flex flex-col md:flex-row gap-x-16 gap-y-8 items-center justify-center">
        <div className="relative p-8 flex-shrink-0 h-[306px] w-[340px] bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden flex items-end">
          <div className="absolute -inset-y-7">
            <div className="relative space-y-3">
              <div className="h-full w-[3px] bg-slate-700 absolute left-1.5 -translate-x-1/2" />

              <div className="absolute h-full w-full bg-gradient-to-t from-slate-800 to-transparent" />

              <div className="flex items-center gap-x-3.5">
                <div className="flex-shrink-0 h-3 w-3 rounded-full border border-slate-700 bg-slate-800 z-10" />

                <div className="flex-1 flex items-center gap-x-2 h-[30px] bg-slate-700 rounded-full border border-slate-600 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

                  <p className="text-sm text-white whitespace-nowrap">
                    Wake up, get dressed and head outside
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-3.5">
                <div className="flex-shrink-0 h-3 w-3 rounded-full border border-slate-700 bg-slate-800 z-10" />

                <div className="flex-1 flex items-center gap-x-2 h-[30px] bg-slate-700 rounded-full border border-slate-600 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <p className="text-sm text-white whitespace-nowrap">
                    Learn to play drums like Joey Castillo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-3.5">
                <div className="flex-shrink-0 h-3 w-3 rounded-full border border-slate-700 bg-slate-800 z-10" />

                <div className="flex-1 flex items-center gap-x-2 h-[30px] bg-slate-700 rounded-full border border-slate-600 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                  <p className="text-sm text-white whitespace-nowrap">
                    Refactor the most important part of the codebase
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-3.5">
                <div className="flex-shrink-0 h-3 w-3 rounded-full border border-slate-700 bg-slate-800 z-10" />

                <div className="flex-1 flex items-center gap-x-2 h-[30px] bg-slate-700 rounded-full border border-slate-600 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                  <p className="text-sm text-white whitespace-nowrap">
                    Make the UI really pretty
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <h6 className="text-sm font-semibold text-white">
              Track your progress
            </h6>

            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="relative flex-shrink-0 h-[306px] w-[340px] bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden flex items-end">
          <div className="absolute inset-y-5 inset-x-5">
            <div className="relative">
              <div className="absolute h-full w-full bg-gradient-to-t from-slate-800 to-transparent" />

              <div className="h-32 overflow-hidden rounded-t-xl border border-slate-600 bg-slate-700 flex flex-col">
                <div className="py-4 px-5 flex items-center gap-x-3.5 border-b border-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-slate-500 stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>

                  <h6 className="text-sm text-slate-200">
                    Type a command or search...
                  </h6>
                </div>

                <div className="py-4 px-5 flex flex-col gap-y-2.5">
                  <h6 className="text-sm">Search files or folders</h6>

                  <h6 className="text-sm">
                    Assign to your least favourite dev
                  </h6>

                  <h6 className="text-sm">Assign to the junior developer</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 p-8">
            <h6 className="text-sm font-semibold text-white">
              Use our commands
            </h6>

            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="relative flex-shrink-0 h-[306px] w-[340px] bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden flex items-end">
          <div className="absolute inset-y-4 inset-x-4">
            <div className="relative">
              <div className="absolute h-full w-96 bg-gradient-to-t from-slate-800 to-transparent" />

              <div className="flex gap-x-px">
                <div className="flex flex-col gap-y-px">
                  <div className="w-[90px] h-[26px] px-3 py-1 bg-slate-700/20 rounded-tl-lg">
                    <h6 className="uppercase text-xs text-slate-600">Name</h6>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-[90px] h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">Dave</h6>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-[90px] h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">Jason</h6>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-[90px] h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">Dave</h6>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-px">
                  <div className="w-[90px] h-[26px] px-3 py-1 bg-slate-700/20">
                    <h6 className="uppercase text-xs text-slate-600">Amount</h6>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-[90px] h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">$1,000.00</h6>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-[90px] h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">$1,240.00</h6>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-[90px] h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">$1,000.00</h6>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-y-px">
                  <div className="w-36 h-[26px] px-3 py-1 bg-slate-700/20 rounded-tr-lg">
                    <h6 className="uppercase text-xs text-slate-600">Stocks</h6>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-36 h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">AAPL</h6>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-36 h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">BARC.L</h6>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div className="w-36 h-[30px] px-3 py-1 bg-slate-700">
                      <h6 className="text-sm text-white">SBUX</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 p-8">
            <h6 className="text-sm font-semibold text-white">
              Track your spending
            </h6>

            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
