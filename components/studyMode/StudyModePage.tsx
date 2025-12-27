import Header from "../shared/header/Header";
import StudyFlashCard from "./StudyFlashCard";
import StudyStatistics from "./StudyStatistics";

function StudyModePage() {
  return (
    <div className="space-y-6">
      <Header />
      <StudyFlashCard />
      <StudyStatistics />
    </div>
  );
}

export default StudyModePage;
