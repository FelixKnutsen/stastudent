export interface NavSubItem {
  readonly title: string;
  readonly href: string;
  readonly description?: string;
}

export interface NavItem {
  readonly title: string;
  readonly href: string;
  readonly children?: readonly NavSubItem[];
}

export interface FooterLinkGroup {
  readonly title: string;
  readonly links: readonly {
    readonly title: string;
    readonly href: string;
    readonly isExternal?: boolean;
  }[];
}
