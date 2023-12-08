import ClientSection from "../ClientSection/ClientSection";

const IncompleteTab = () => {
  return (
    <div className="w-full md:w-[450px] mb-5 md:mb-0 bg-slate-200 h-screen overflow-y-scroll">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-red-500 rounded-l-lg"></div>
          <h2 className="font-semibold">Incomplete</h2>
        </div>
        <p className="bg-slate-300 w-8 h-8 flex items-center justify-center rounded">
          0
        </p>
      </div>
      <div className="mx-2">
        <ClientSection id={1}></ClientSection>
        <ClientSection id={2}></ClientSection>
        <ClientSection id={3}></ClientSection>
        <ClientSection id={4}></ClientSection>
        <ClientSection id={5}></ClientSection>
      </div>
    </div>
  );
};

export default IncompleteTab;
