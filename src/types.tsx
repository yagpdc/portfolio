export interface HeroGroup {
  type: "intro" | "navigation";
  title: string;
  subtitle: string;
  link?: React.ReactNode;
}

export interface HeroProps {
  groups: HeroGroup[];
}
