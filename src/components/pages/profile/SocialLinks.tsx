"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button, Input, Select, Space, Typography, message } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  RedditOutlined,
  PinterestOutlined,
  TikTokOutlined,
  ScanOutlined,
  WhatsAppOutlined,
  TeamOutlined,
  DiscordOutlined,
  MediumOutlined,
} from "@ant-design/icons";
// import { useAppDispatch } from "@/redux/hooks";
// import { setSocialLinks } from "@/redux/features/profile/profileSlice";

const { Text } = Typography;
const { Option } = Select;

interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

interface PersonalInfoProps {
  onComplete: () => void;
}

const platformIcons: Record<string, React.ReactNode> = {
  Facebook: <FacebookOutlined style={{ color: "#0077B5" }} />,
  Twitter: <TwitterOutlined style={{ color: "#0077B5" }} />,
  Instagram: <InstagramOutlined style={{ color: "#0077B5" }} />,
  Youtube: <YoutubeOutlined style={{ color: "#0077B5" }} />,
  LinkedIn: <LinkedinOutlined style={{ color: "#0077B5" }} />,
  GitHub: <GithubOutlined style={{ color: "#0077B5" }} />,
  Reddit: <RedditOutlined style={{ color: "#0077B5" }} />,
  Pinterest: <PinterestOutlined style={{ color: "#0077B5" }} />,
  TikTok: <TikTokOutlined style={{ color: "#0077B5" }} />,
  Snapchat: <ScanOutlined style={{ color: "#0077B5" }} />,
  WhatsApp: <WhatsAppOutlined style={{ color: "#0077B5" }} />,
  Telegram: <TeamOutlined style={{ color: "#0077B5" }} />,
  Discord: <DiscordOutlined style={{ color: "#0077B5" }} />,
  Medium: <MediumOutlined style={{ color: "#0077B5" }} />,
};

const platformRegex: Record<string, RegExp> = {
  Facebook: /^(https?:\/\/)?(www\.)?facebook\.com\/.+/i,
  Twitter: /^(https?:\/\/)?(www\.)?twitter\.com\/.+/i,
  Instagram: /^(https?:\/\/)?(www\.)?instagram\.com\/.+/i,
  Youtube: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i,
  LinkedIn: /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i,
  GitHub: /^(https?:\/\/)?(www\.)?github\.com\/.+/i,
  Reddit: /^(https?:\/\/)?(www\.)?reddit\.com\/.+/i,
  Pinterest: /^(https?:\/\/)?(www\.)?pinterest\.com\/.+/i,
  TikTok: /^(https?:\/\/)?(www\.)?tiktok\.com\/.+/i,
  Snapchat: /^(https?:\/\/)?(www\.)?snapchat\.com\/.+/i,
  WhatsApp: /^(https?:\/\/)?(www\.)?whatsapp\.com\/.+/i,
  Telegram: /^(https?:\/\/)?(www\.)?t\.me\/.+/i,
  Discord: /^(https?:\/\/)?(www\.)?discord\.(com|gg)\/.+/i,
  Medium: /^(https?:\/\/)?(www\.)?medium\.com\/.+/i,
};

const platformPlaceholders: Record<string, string> = {
  Facebook: "https://facebook.com/username",
  Twitter: "https://twitter.com/username",
  Instagram: "https://instagram.com/username",
  Youtube: "https://youtube.com/username or https://youtu.be/ID",
  LinkedIn: "https://linkedin.com/in/username",
  GitHub: "https://github.com/username",
  Reddit: "https://reddit.com/user/username",
  Pinterest: "https://pinterest.com/username",
  TikTok: "https://tiktok.com/@username",
  Snapchat: "https://snapchat.com/add/username",
  WhatsApp: "https://whatsapp.com/dl/",
  Telegram: "https://t.me/username",
  Discord: "https://discord.gg/invite-code or https://discord.com/users/ID",
  Medium: "https://medium.com/@username",
};

const platformOptions = [
  { value: "Facebook", label: "Facebook" },
  { value: "Twitter", label: "Twitter" },
  { value: "Instagram", label: "Instagram" },
  { value: "Youtube", label: "YouTube" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "GitHub", label: "GitHub" },
  { value: "Reddit", label: "Reddit" },
  { value: "Pinterest", label: "Pinterest" },
  { value: "TikTok", label: "TikTok" },
  { value: "Snapchat", label: "Snapchat" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Telegram", label: "Telegram" },
  { value: "Discord", label: "Discord" },
  { value: "Medium", label: "Medium" },
];

const SocialLinks = ({ onComplete }: PersonalInfoProps) => {
  const [socialLinks, setSocialLinksState] = useState<SocialLink[]>([]);

  const [isValid, setIsValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  // const dispatch = useAppDispatch();

  useEffect(() => {
    const errors: Record<string, string> = {};
    let hasEmptyFields = false;
    let hasInvalidUrls = false;
    const platforms = new Set<string>();

    socialLinks.forEach((link) => {
      platforms.add(link.platform);

      if (!link.url.trim()) {
        hasEmptyFields = true;
        errors[link.id] = "URL is required";
      } else if (
        link.url.trim() &&
        !platformRegex[link.platform].test(link.url.trim())
      ) {
        hasInvalidUrls = true;
        errors[link.id] = `Please enter a valid ${link.platform} URL`;
      }
    });

    const hasDuplicates = platforms.size !== socialLinks.length;

    setIsValid(!hasEmptyFields && !hasInvalidUrls && !hasDuplicates);
    setValidationErrors(errors);
  }, [socialLinks]);

  const handleAddNewLink = () => {
    const availablePlatform =
      platformOptions.find(
        (option) => !socialLinks.some((link) => link.platform === option.value)
      )?.value || "Facebook";

    setSocialLinksState([
      ...socialLinks,
      {
        id: Date.now().toString(),
        platform: availablePlatform,
        url: "",
      },
    ]);
  };

  const handleRemoveLink = (id: string) => {
    if (socialLinks.length > 1) {
      setSocialLinksState(socialLinks.filter((link) => link.id !== id));
    } else {
      message.warning("At least one social link is required");
    }
  };

  const handlePlatformChange = (value: string, id: string) => {
    const isDuplicate = socialLinks.some(
      (link) => link.platform === value && link.id !== id
    );

    if (isDuplicate) {
      message.error("This platform is already selected");
      return;
    }

    setSocialLinksState(
      socialLinks.map((link) =>
        link.id === id ? { ...link, platform: value, url: "" } : link
      )
    );
  };

  const handleUrlChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setSocialLinksState(
      socialLinks.map((link) =>
        link.id === id ? { ...link, url: e.target.value } : link
      )
    );
  };

  const handleSaveChanges = () => {
    const emptyLinks = socialLinks.filter((link) => !link.url.trim());
    const invalidLinks = socialLinks.filter(
      (link) =>
        link.url.trim() && !platformRegex[link.platform].test(link.url.trim())
    );
    const hasDuplicates =
      new Set(socialLinks.map((link) => link.platform)).size !==
      socialLinks.length;

    if (emptyLinks.length > 0) {
      message.error("Please fill in all social media URLs");
      return;
    }

    if (invalidLinks.length > 0) {
      message.error("Please enter valid URLs for all social media links");
      return;
    }

    if (hasDuplicates) {
      message.error("Duplicate platforms are not allowed");
      return;
    }
    // dispatch(setSocialLinks(socialLinks));

    onComplete();
    console.log("Saved social links:", socialLinks);
  };

  const getAvailablePlatforms = (currentId: string) => {
    const currentPlatform = socialLinks.find(
      (link) => link.id === currentId
    )?.platform;
    return platformOptions.filter(
      (option) =>
        !socialLinks.some(
          (link) => link.platform === option.value && link.id !== currentId
        ) || option.value === currentPlatform
    );
  };

  return (
    <div className="mx-auto pt-8">
      <h3 className="text-[#333] text-xl font-medium mb-5">
        Social Information
      </h3>

      <Space direction="vertical" className="w-full" size="middle">
        {socialLinks.map((link, index) => (
          <div
            key={link.id}
            className="flex items-start gap-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex-grow">
              <Text strong className="block mb-1 text-sm">
                Social Link {index + 1}
              </Text>
              <div className="flex gap-2">
                <Select
                  value={link.platform}
                  className="w-40"
                  onChange={(value) => handlePlatformChange(value, link.id)}
                  popupMatchSelectWidth={false}
                >
                  {getAvailablePlatforms(link.id).map((option) => (
                    <Option key={option.value} value={option.value}>
                      <Space>
                        {platformIcons[option.value]}
                        {option.label}
                      </Space>
                    </Option>
                  ))}
                </Select>
                <div className="flex-1">
                  <Input
                    placeholder={platformPlaceholders[link.platform]}
                    value={link.url}
                    onChange={(e) => handleUrlChange(e, link.id)}
                    className="w-full"
                    allowClear
                    status={validationErrors[link.id] ? "error" : ""}
                  />
                  {validationErrors[link.id] && (
                    <Text type="danger" className="text-xs">
                      {validationErrors[link.id]}
                    </Text>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="text"
              icon={<DeleteOutlined className="text-gray-500" />}
              onClick={() => handleRemoveLink(link.id)}
              disabled={socialLinks.length <= 1}
              className="w-8 h-8 flex items-center justify-center rounded-full !hover:bg-gray-200"
            />
          </div>
        ))}

        {socialLinks.length < platformOptions.length && (
          <Button
            size="middle"
            icon={<PlusOutlined />}
            onClick={handleAddNewLink}
            className="w-full mt-2 bg-[#E9EFF2] hover:!bg-[#E9EFF2]/90 hover:!text-black"
          >
            Add New Social Link
          </Button>
        )}
      </Space>

      <div className="flex justify-start mt-8">
        <Button
          size="large"
          className="!bg-primary hover:!bg-primary/90 px-6 !py-5 rounded-md text-white disabled:text-white/50"
          type="primary"
          onClick={handleSaveChanges}
          disabled={!isValid}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default SocialLinks;
