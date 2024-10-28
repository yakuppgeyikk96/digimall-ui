export interface IBreadcrumbItem {
  label: string;
  href?: string;
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
}
