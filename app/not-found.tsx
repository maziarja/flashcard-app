import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-137.5 flex-col justify-center gap-8 text-center">
      <div className="mx-auto w-2/3 space-y-3">
        <p className="text-preset-2 text-neutral-900">Page not found</p>
        <p className="text-preset-4-regular text-neutral-600">
          The page you&lsquo;re looking for doesn&lsquo;t exist or was moved.
        </p>
      </div>

      <Link href="/">
        <Button variant="secondary" size="lg" className="mx-auto">
          Go back home
        </Button>
      </Link>
    </div>
  );
}
