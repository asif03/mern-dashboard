import { cn } from "@/lib/utils";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Hero = ({ tag, title, subtitle }) => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center rounded-lg h-[600px] w-full relative">
      <Card className={cn("w-[598px] -bottom-10 absolute left-10 py-6")}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardFooter>
          <div className="w-full flex flex-row items-center gap-3 text-[#97989F] text-sm font-normal">
            <img
              src=""
              className="rounded-full w-8 h-8 bg-red-400"
              alt="Author Image"
            />
            <span>Author Name</span>
            <span>August 20, 2022</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Hero;
