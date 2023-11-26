import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for the props
type CardProps = {
  title: string;
  imageUrl: string;
  detailUrl: string;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, detailUrl }) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow">
      <h2>{title}</h2>
      <Link href={detailUrl} passHref target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
};

export default Card;
