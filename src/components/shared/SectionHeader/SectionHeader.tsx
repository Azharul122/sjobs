import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import titleImage from "@/assets/images/home/client-title.png";

interface ReviewHeaderProps {
  icon?: StaticImageData;
  iconAlt?: string;
  subtitle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;

  // Container classes
  className?: string;

  // Icon container classes
  iconContainerClass?: string;

  // Image classes
  iconClass?: string;
  isLeft?: boolean;
  // Text classes
  subtitleClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}

const SectionHeader = ({
  isLeft = false,
  icon = titleImage,
  iconAlt,
  subtitle,
  title,
  description,
  className,
  iconContainerClass,
  iconClass,
  subtitleClass,
  titleClass,
  descriptionClass,
}: ReviewHeaderProps) => {
  // Base classes (your original styles)
  const baseClasses = {
    iconContainer: `flex  gap-2 ${
      isLeft
        ? "justify-center max-md:items-center max-md:mx-auto md:justify-start"
        : "justify-center items-center mx-auto"
    } mb-3 border border-[#D9D9D9] w-max bg-white p-2  rounded `,
    subtitle:
      "text-[#333] leading-[1.3] md:leading-[1.5] font-normal text-[18px]",
    title: `md:text-[32px] text-[24px] leading-[1.3] md:leading-[1.5] font-semibold ${
      isLeft ? "text-center md:text-left" : "text-center"
    } mb-3`,
    description: ` mb-3 !block text-[18px] text-textBlack1  max-w-[990px] ${
      isLeft ? "max-md:text-center max-md:mx-auto" : "mx-auto text-center"
    }  md:tracking-wide`,
  };

  // Merge user classes with base classes
  const mergedIconContainerClass = twMerge(
    clsx(baseClasses.iconContainer, iconContainerClass)
  );

  const mergedSubtitleClass = twMerge(
    clsx(baseClasses.subtitle, subtitleClass)
  );

  const mergedTitleClass = twMerge(clsx(baseClasses.title, titleClass));

  const mergedDescriptionClass = twMerge(
    clsx(baseClasses.description, descriptionClass)
  );

  return (
    <div className={className}>
      {(icon || subtitle) && (
        <div className={mergedIconContainerClass}>
          {icon && (
            <Image
              src={icon || titleImage}
              alt={iconAlt || ""}
              className={iconClass}
            />
          )}
          {subtitle && <p className={mergedSubtitleClass}>{subtitle}</p>}
        </div>
      )}

      {title && <h2 className={mergedTitleClass}>{title}</h2>}

      {description && <p className={mergedDescriptionClass}>{description}</p>}
    </div>
  );
};

export default SectionHeader;
