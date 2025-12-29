import { useCardContext } from "@/app/_contexts/CardContext";
import { Checkbox } from "@/components/ui/checkbox";

function HideMasteredCheckbox() {
  const { dispatch } = useCardContext();
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="hide-mastered"
        onCheckedChange={(checked) => {
          dispatch({ type: "HIDE_MASTERED", payload: !!checked });
        }}
      />
      <label
        htmlFor="hide-mastered"
        className="text-preset-4-medium text-neutral-900 select-none"
      >
        Hide Mastered
      </label>
    </div>
  );
}

export default HideMasteredCheckbox;
