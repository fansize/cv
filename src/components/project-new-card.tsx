import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectNewCard({ title, description, tags, link }: Props) {
  return (
    <Card key={title} className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a className="hover:underline" href={link}>
              {title}
            </a>
          </h3>
        </div>
      </CardHeader>
      <CardContent className="mt-2 text-xs">
        <div>
          <p>{description}</p>
          <div className="mt-2">
            <span className="inline-flex gap-x-1">
              {tags.map((badge) => (
                <Badge
                  variant="secondary"
                  className="px-1 py-0 text-[10px]"
                  key={badge}
                >
                  {badge}
                </Badge>
              ))}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
