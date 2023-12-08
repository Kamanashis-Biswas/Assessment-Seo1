import "./App.css";
import CompletedTab from "./components/CompletedTab/CompletedTab";
import DoingTab from "./components/DoingTab/DoingTab";
import IncompleteTab from "./components/IncompleteTab/IncompleteTab";
import ToDoTab from "./components/ToDoTab/ToDoTab";
import UnderReviewTab from "./components/UnderReviewTab/UnderReviewTab";

function App() {
  return (
    <>
      <div className="bg-white p-6 md:flex gap-5 items-center justify-between w-full md:w-[2400px] overflow-x-scroll">
        <IncompleteTab></IncompleteTab>
        <ToDoTab></ToDoTab>
        <DoingTab></DoingTab>
        <UnderReviewTab></UnderReviewTab>
        <CompletedTab></CompletedTab>
      </div>
    </>
  );
}

export default App;
