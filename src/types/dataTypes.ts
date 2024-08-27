export interface StackType {
  title: string;
  icon: JSX.Element;
  time: string;
}

type ProjectTag = "alone" | "teamwork";
export interface ProjectType {
  tag: ProjectTag;
  thumbnail: string;
  link?: string;
  video?: boolean;
  videoHandle?: (e: any) => void;
  title: string;
}