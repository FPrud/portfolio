export default function curriculumPage() {
  return (
    <main id="page entière" className="flex flex-1 flex-col p-5 bg-blob overflow-y-auto">
      <div id="CV" className="flex flex-col">
        <div id="Title" className="flex justify-center">
          <h1 className="text-5xl">
            <span className="Horizon">Félix</span>
            <span className="HorizonOutlined font-black">Prudhomme</span>
          </h1>
        </div>

        <div id="left-col z" className="p-5">
          <div id="portraitContainer" className="rounded-tl-4xl rounded-tr-4xl">
            <img src="/portrait.webp" alt="Félix Prudhomme" className="rounded-t-full grayscale brightness-112 contrast-125" /></div>
        </div>
        <div id="right-col" className="border-l-3 p-5">
          gaga gougou 2
        </div>
      </div>

      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
    </main >
  );
};