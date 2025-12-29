import StudyFlashCard from "./StudyFlashCard";
import StudyStatistics from "./StudyStatistics";

function StudyModePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_.45fr]">
      <StudyFlashCard />
      <StudyStatistics />
    </div>
  );
}

export default StudyModePage;
