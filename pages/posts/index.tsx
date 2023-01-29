import Header from "@/components/common/header";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Key } from "react";

interface Posts {
  id: Key;
  productName: String;
}
type Props = {
  posts: Posts[];
};

const PostListPage = ({ posts }: Props) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1>Post List Page</h1>
      <ul>
        {posts.map((item, index) => (
          <li key={item.id}>
            <Link href={`${router.pathname}/${item.id}`}>
              {item.productName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      posts: response.slice(0, 10),
    },
  };
};

export default PostListPage;
