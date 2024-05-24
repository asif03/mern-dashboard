import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Post = ({
  id,
  imageUrl,
  postTitle,
  tags,
  authorImage,
  authorName,
  publishDate,
}) => {
  return (
    <Card className={cn("w-[392px]")}>
      <CardContent className="p-2">
        <img
          src={imageUrl}
          className="rounded-lg w-full h-[240px] bg-red-400"
          alt="Post Image"
        />
      </CardContent>
      <CardDescription className="px-2">
        <div className="min-w-12 p-1 rounded-lg bg-secondary min-h-8">
          {tags}
        </div>
      </CardDescription>
      <CardHeader>
        <CardTitle>
          <Link to={id}>More{postTitle}</Link>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="w-full flex flex-row items-center gap-3 text-[#97989F] text-sm font-normal">
          <img
            src={authorImage}
            className="rounded-full w-8 h-8 bg-red-400"
            alt="Author Image"
          />
          <span>{authorName}</span>
          <span>{publishDate}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
