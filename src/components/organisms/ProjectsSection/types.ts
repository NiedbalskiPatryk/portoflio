export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  summary?: string;
  tags?: string[];
  previewImage?: string;
  url?: string;
  links?: ProjectLink[];
  media?: ProjectMedia[];
}
