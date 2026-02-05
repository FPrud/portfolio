export default function CvPage() {
  return (
    <main id="page entière" className="flex flex-1 flex-col p-5 bg-cloud overflow-y-auto">
      <div id="article" className="flex">
        <div id="left-col"></div>
        <div id="right-col" className="border-l-3"></div>
      </div>

      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
    </main >
  );
};