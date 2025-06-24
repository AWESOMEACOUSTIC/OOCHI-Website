
function Ready() {
    return (
        <div className="w-full p-20 bg-[#cdea68] flex flex-col gap-y-5 justify-center items-center">
            <div className="mb-4">
                {
                    ["Ready", "To start", "The project?"].map((items, index) => (
                        <h1 key={index} className="text-center text-[15vw] text-extrabold leading-[11.4vw] uppercase font-[grostesk-semibold-v1]">{items}</h1>
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3">
                <button className='w-[16.8vw] uppercase px-7 py-4 rounded-4xl flex items-center justify-between bg-black'>
                <span className='text-[1vw] text-white font-[neueMontreal-v1]'>Start the project</span>
                <div className='bg-white rounded-full w-[0.7vw] h-[0.7vw]'></div>
            </button>
            <span className="font-medium font-[neueMontreal-v1] text-[1.3vw]">OR</span>
            <button className='w-[16.8vw] uppercase px-7 py-4 rounded-4xl flex items-center justify-between border-1 border-black'>
                <span className='text-[1vw] text-black font-[neueMontreal-v1]'>hello@ochi.design</span>
                <div className='bg-black rounded-full w-[0.7vw] h-[0.7vw]'></div>
            </button>
            </div>
        </div>
    )
}

export default Ready