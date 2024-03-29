import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { LoaderIcon } from "lucide-react";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: { size: "default" },
});

type SpinnerProps = VariantProps<typeof spinnerVariants>;

export function Spinner({ size }: SpinnerProps) {
  return <LoaderIcon className={cn(spinnerVariants({ size }))} />;
}
