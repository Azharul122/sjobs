"use client";

import { Card, Typography, Tag, Button, Space } from "antd";
import { ClockCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const { Title, Text } = Typography;

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  category: string;
  imageUrl: string | StaticImageData;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={"/blogs/1"}>
      <Card
        hoverable
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
        className="!p-0 relative"
        cover={
          <div className="relative h-[260px]">
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded"
            />
          </div>
        }
      >
        <div style={{ padding: 0 }}>
          <Space direction="vertical" size="small" style={{ flex: 1 }}>
            <Space
              size="small"
              style={{ color: "rgba(0, 0, 0, 0.45)", fontSize: 14 }}
            >
              {/* <Text type="secondary">{post.date}</Text> */}
              <Tag color="blue" style={{ zIndex: 1 }}>
                {post.category}
              </Tag>
              <Text type="secondary">•</Text>
              <Space size={4}>
                <ClockCircleOutlined style={{ fontSize: 12 }} />
                <Text type="secondary">{post.readTime}</Text>
              </Space>
            </Space>

            <Title level={4} ellipsis={{ rows: 2 }} style={{ marginTop: 0 }}>
              {post.title}
            </Title>

            {/* <Paragraph
            ellipsis={{ rows: 3 }}
            type="secondary"
            style={{ flex: 1, marginBottom: 16 }}
          >
            {post.excerpt}
          </Paragraph> */}
          </Space>

          {/* <Divider style={{ margin: "16px 0" }} /> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></div>
        </div>
        <Button
          className="absolute bottom-3"
          type="link"
          size="small"
          style={{ padding: 0 }}
        >
          Read more <ArrowRightOutlined />
        </Button>
      </Card>
    </Link>
  );
}
