export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  poster?: string;
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  /** Short category line shown on the card, e.g. "Marketplace". */
  kind?: string;
  summary?: string;
  /** Role value only (the "My role" label is rendered by the section). */
  role?: string;
  tags?: string[];
  previewImage?: string;
  url?: string;
  links?: ProjectLink[];
  media?: ProjectMedia[];
}
