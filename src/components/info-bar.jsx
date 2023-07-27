function InfoBar({ infoIsShowing, setInfoIsShowing, playClickSound }) {
  if (infoIsShowing) {
    return (
      <div className="bg-slate-500 border-2 rounded-lg p-4 w-full text-sm bg-opacity-50 relative">
        <button
          onClick={() => {
            playClickSound();
            setInfoIsShowing(false);
          }}
          className=" absolute right-0 top-0 p-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        Hello!
        <br /> <br />
        thanks for checking out my react project. This project is part of the odin project curriculum.
        <br /> <br />
        copyright disclaimer: Althoug I coded this webapp, i did not create the assets (including images and sounds).
        <br /> <br />
        <span className="text-center text-sky-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">Balazs Hevesi 2023</span>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-500 border-2 rounded-lg p-4 w-full text-sm bg-opacity-50 relative">
        <button
          onClick={() => {
            playClickSound();
            setInfoIsShowing(true);
          }}
          className=" absolute right-0 top-0 p-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <span className="text-center text-sky-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">Balazs Hevesi 2023</span>
      </div>
    );
  }
}

export default InfoBar;
