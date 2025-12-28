import Header from "../shared/header/Header";
import StudyFlashCard from "./StudyFlashCard";
import StudyStatistics from "./StudyStatistics";

function StudyModePage() {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid gap-6 lg:grid-cols-[1fr_.45fr]">
        <StudyFlashCard />
        <StudyStatistics />
      </div>
    </div>
  );
}

export default StudyModePage;
