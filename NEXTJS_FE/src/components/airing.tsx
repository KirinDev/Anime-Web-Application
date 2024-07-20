export default function Airing({ airing }: any) {

    return(
        <div style={{ backgroundImage: "url('https://www.itl.cat/pngfile/big/9-94683_download-wallpaper-vector.jpg')"}}>
            <h2 style={{ fontFamily: 'Playwrite DE Grund, cursive' }} className="text-[20px] text-cyan-200 mb-4 text-center font-bold pt-6 ">Anime Airing</h2>
            <div className="h-auto grid grid-cols-6 grid-rows-2 gap-x-6 gap-y-24 pl-36 pr-36 pt-5 pb-24">
            {airing.map((image:any, index:any) => (
                <div key={index} className="relative rounded-lg cursor-pointer">
                    <div className="h-80"> 
                        <img
                            src={image.url}
                            alt={`Image ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300 transform hover:scale-105 hover:opacity-50"
                        />
                    </div>
                    <div className="absolute w-full h-16 bg-opacity-50 px-4 py-2">
                        <p style={{ fontFamily: "Itim, cursive" }} className="text-[15px] text-cyan-200 mb-4 text-center font-bold">{image.title}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        
    );
}
