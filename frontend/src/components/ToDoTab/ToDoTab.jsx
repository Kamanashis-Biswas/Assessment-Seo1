import ClientSection from "../ClientSection/ClientSection";

const ToDoTab = () => {
  return (
    <div className="w-full md:w-[450px] mb-5 md:mb-0 bg-slate-200 h-screen overflow-y-scroll box-border">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded-l-lg"></div>
          <h2 className="font-semibold">To Do</h2>
        </div>
        <p className="bg-slate-300 w-8 h-8 flex items-center justify-center rounded">
          0
        </p>
      </div>
      <div className="mx-2">
        <ClientSection id={6}></ClientSection>
        <ClientSection id={7}></ClientSection>
        <ClientSection id={8}></ClientSection>
        <ClientSection id={9}></ClientSection>
        <ClientSection id={10}></ClientSection>
      </div>
    </div>
  );
};

export default ToDoTab;
