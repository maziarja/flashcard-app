import AllCardsPage from "@/components/allCards/AllCardsPage";
import StudyModePage from "@/components/studyMode/StudyModePage";

type PageProps = {
  searchParams?: Promise<{
    window?: "all-cards" | "study-mode";
  }>;
};

async function Page({ searchParams }: PageProps) {
  const query = await searchParams;
  const window = query?.window;

  return (
    <>
      {window !== "all-cards" && <StudyModePage />}
      {window === "all-cards" && <AllCardsPage />}
    </>
  );
}

export default Page;
