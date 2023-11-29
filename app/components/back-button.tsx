import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "~/libs/shadcn";

type BackButtonProps = {
  className?: string;
  buttonText?: string;
  to: string;
  children?: React.ReactNode;
};

export function BackButton({
  className,
  buttonText,
  to,
  children,
}: BackButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn("text-xl capitalize -ml-4 mb-8", className)}
      asChild
    >
      <Link to={to}>
        <ArrowLeft size={30} className="mr-2" />
        {buttonText}
        {children}
      </Link>
    </Button>
  );
}
