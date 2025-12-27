"use client";

import { Separator } from "../ui/separator";
import CardBody from "./card/CardBody";
import CardFilter from "./card/CardFilter";
import CardFooter from "./card/CardFooter";

function StudyFlashCard() {
  return (
    <div className="bg-neutral-0 rounded-2xl border-t border-r-3 border-b-3 border-l border-neutral-900">
      <CardFilter />
      <Separator />
      <CardBody />
      <Separator />
      <CardFooter />
    </div>
  );
}

export default StudyFlashCard;
