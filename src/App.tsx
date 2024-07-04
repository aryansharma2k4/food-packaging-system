function App() {

  return (
    <>
    <div>
      <header className="py-3 bg-black px-4">
        <div className='flex justify-between'>
          <div className="text-white">Logo</div>
          <div className="flex">
            <div className="">
              <div className="flex text-white">
                <div className="pt-3 mr-4">Maadhurya</div>
                <svg className="rounded-full bg-white" fill="#000000" version="1.1" id="Capa_1" height={50} width={50} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.532 45.532" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path> </g> </g></svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex py-4 mt-12 ml-12">
        <form className="flex" action="">
          <div className="font-bold text-2xl underline font-mono">Enter Product ID: </div>
          <input className="border-2 px-8 ml-4 border-black rounded-xl" placeholder="Enter the Product ID" type="text"/>
          <button className="font-mono text-white text-xl ml-4 px-4 hover:bg-blue-500 rounded-xl bg-black">Submit</button>
        </form>
      </div>
      <div className="ml-12 mt-24">
        <h1 className=" text-black font-bold text-2xl">Product Information</h1>
        <div className="mt-4">
          <h2 className="text-xl mt-4 font-bold font-mono">1. Temperature(c): value</h2>
          <h2 className="text-xl mt-4 font-bold font-mono">2. pH : value</h2>
          <h2 className="text-xl mt-4 font-bold font-mono">3. Expiry Date of Food </h2>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
