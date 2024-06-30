
export enum SearchType {
  User = "User",
  Organization = "Organization",
}

export interface RouteProps {
  name: string;
  path: string;
  href?: string;
  target?: string;
  icon?: React.ElementType;
  isActive: boolean;
}

export interface NavbarProps {
  routes: RouteProps[];
  action?: React.ReactNode;
}

export interface FooterProps {
  brandName: string;
  brandLink: string;
  routes: RouteProps[];
}

export interface SearchResultProps {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  type: SearchType;
  details: {
    name: string;
    email: string;
    followers: number;
  } | null;
}

export interface SearchResultListProps {
  results: SearchResultProps[] | null;
  loading: boolean;
  error: string | null;
}

// export 