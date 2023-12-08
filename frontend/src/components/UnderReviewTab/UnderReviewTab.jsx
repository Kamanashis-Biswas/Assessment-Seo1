import ClientSection from "../ClientSection/ClientSection";

const UnderReviewTab = () => {
  return (
    <div className="w-full md:w-[450px] mb-5 md:mb-0 bg-slate-200 h-screen overflow-y-scroll">
      <div className="flex items-center justify-between px-4 py-4">
        <h2>Under Review</h2>
        <p className="bg-slate-300 w-8 h-8 flex items-center justify-center rounded">
          0
        </p>
      </div>
      <div className="mx-2">
        <ClientSection id={21}></ClientSection>
        <ClientSection id={22}></ClientSection>
        <ClientSection id={23}></ClientSection>
        <ClientSection id={24}></ClientSection>
        <ClientSection id={25}></ClientSection>
      </div>
    </div>
  );
};

export default UnderReviewTab;
