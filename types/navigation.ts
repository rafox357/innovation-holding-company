export interface NavLink {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavColumn {
  title: string;
  items: NavLink[];
}

export interface NavTab {
  title: string;
  columns: NavColumn[];
}
