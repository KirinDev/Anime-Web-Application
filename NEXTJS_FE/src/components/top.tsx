export default function Top({ topRated, justCompleted, newReleases }: any) {
  return (
    <div className="bg-slate-900 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between space-x-4">
          {/* Top 5 Rated Animes */}
          <div className="w-1/3 bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center mb-8">
              <h2
                style={{ fontFamily: "Playwrite DE Grund, cursive" }}
                className="text-[20px]"
              >
                Top 5 Rated Airing
              </h2>
              <svg
                className="w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#ffffff"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>

            <ul>
              {topRated.map((anime: any, index: any) => (
                <li
                  key={index}
                  className="flex mb-2 bg-gray-600 rounded-lg hover:scale-105 hover:brightness-125 hover:text-green-500 transition-transform duration-300 ease-in-out cursor-pointer"
                >
                  <span className="bg-gray-900 text-[20px] flex items-center text-white px-3 py-1 rounded-l-lg">
                    {index + 1}
                  </span>
                  <img
                    src={anime.url}
                    alt={anime.title}
                    className="min-w-20 h-20 mr-2 rounded-lg"
                  />
                  <div className="flex flex-col p-2">
                    <p
                      style={{ fontFamily: "Itim, cursive" }}
                      className="text-[14px] mb-1"
                    >
                      {anime.title}
                    </p>
                    <p className="text-[10px] font-bold text-gray-950">{anime.aired}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* New Releases */}
          <div className="w-1/3 bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center mb-8">
              <h2
                style={{ fontFamily: "Playwrite DE Grund, cursive" }}
                className="text-[20px]"
              >
                New Releases
              </h2>
              <svg
                className="w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V256c0-13.3-10.7-24-24-24z"
                />
              </svg>
            </div>

            <ul>
              {newReleases.map((anime: any, index: any) => (
                <li
                  key={index}
                  className="flex mb-2 bg-gray-600 rounded-lg hover:scale-105 hover:brightness-125 hover:text-green-500 transition-transform duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    src={anime.url}
                    alt={anime.title}
                    className="min-w-20 h-20 mr-2 rounded-lg"
                  />
                  <div className="flex flex-col p-2">
                    <p
                      style={{ fontFamily: "Itim, cursive" }}
                      className="text-[14px] mb-1"
                    >
                      {anime.title}
                    </p>
                    <p className="text-[10px] font-bold text-gray-950">{anime.aired}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Just Completed Animes */}
          <div className="w-1/3 bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center mb-8">
              <h2
                style={{ fontFamily: "Playwrite DE Grund, cursive" }}
                className="text-[20px]"
              >
                Just Completed
              </h2>
              <svg
                className="w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
            </div>
            <ul>
              {justCompleted.map((anime: any, index: any) => (
                <li
                  key={index}
                  className="flex mb-2 bg-gray-600 rounded-lg hover:scale-105 hover:brightness-125 hover:text-green-500 transition-transform duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    src={anime.url}
                    alt={anime.title}
                    className="min-w-20 h-20 mr-2 rounded-lg"
                  />
                  <div className="flex flex-col p-2">
                    <p
                      style={{ fontFamily: "Itim, cursive" }}
                      className="text-[14px] mb-1"
                    >
                      {anime.title}
                    </p>
                    <p className="text-[10px] font-bold text-gray-950">{anime.aired}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
