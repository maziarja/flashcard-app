import InProgress from "./statistics/InProgress";
import Mastered from "./statistics/Mastered";
import NotStarted from "./statistics/NotStarted";
import TotalCards from "./statistics/TotalCards";

function StudyStatistics() {
  return (
    <div className="bg-neutral-0 space-y-4 rounded-2xl border-t border-r-3 border-b-3 border-l border-neutral-900 px-4 py-5 md:px-5 md:py-4">
      <p className="text-preset-2 text-neutral-900">Study Statistics</p>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-1">
        <TotalCards />
        <Mastered />
        <InProgress />
        <NotStarted />
      </div>
    </div>
  );
}

export default StudyStatistics;
