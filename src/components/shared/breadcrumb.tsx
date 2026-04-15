"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent: boolean;
}

interface BreadcrumbProps {
  homeLabel?: string;
  omitHome?: boolean;
  labelsMap?: Record<string, string>;
}

export default function Breadcrumb({
  homeLabel = "Home",
  omitHome = false,
  labelsMap = {},
}: BreadcrumbProps) {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Split pathname into segments and remove empty segments
    const segments = pathname.split("/").filter(Boolean);

    // Generate breadcrumb items
    const items: BreadcrumbItem[] = [];

    // Add home item if not omitted
    if (!omitHome) {
      items.push({
        label: homeLabel,
        href: "/",
        isCurrent: segments.length === 0,
      });
    }

    // Add items for each segment
    segments.forEach((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const rawLabel = segment.replace(/-/g, " ");

      // Use custom label from map if available, otherwise capitalize each word
      const label =
        labelsMap[segment] ||
        rawLabel
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      items.push({
        label,
        href,
        isCurrent: index === segments.length - 1,
      });
    });

    return items;
  }, [pathname, homeLabel, omitHome, labelsMap]);

  // Don't render if there's only one item or none
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-6 lg:py-9 bg-[#E9EFF2] lg:px-6">
      <ol className="flex container flex-wrap items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                /
              </span>
            )}

            {breadcrumb.isCurrent ? (
              <span className="text-primary font-semibold" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-textBlack2 hover:text-gray-900 hover:underline"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
