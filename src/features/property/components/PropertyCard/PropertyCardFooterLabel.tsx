import { classnames } from "@/utils/classnames";

type PropertyCardFooterLabelProps = {
  text: string;
  className?: string;
};

export function PropertyCardFooterLabel({
  text,
  className,
}: PropertyCardFooterLabelProps) {
  return (
    <p className={classnames(String(className), "text-sm text-red-500")}>
      {text}
    </p>
  );
}

PropertyCardFooterLabel.displayName = "PropertyCardFooterLabel";
