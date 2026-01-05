import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <Spinner className="text-primary size-20" />
    </div>
  );
}

export default Loading;
