import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { Key } from "react";
type Props = {
  id: Key;
  productName: String;
};

const PostItem = ({ id, productName, ...props }: Props) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <div>
      Post Item
      <p>{id}</p>
      <p>{productName}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context?.params?.id;
  if (!id) return { notFound: true };
  const res = await fetch(
    `https://63ce87f7d2e8c29a9bd94d45.mockapi.io/product/${id}`
  );
  const response = await res.json();

  return {
    props: {
      ...response,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://63ce87f7d2e8c29a9bd94d45.mockapi.io/product/`
  );
  const response = await res.json();
  return {
    paths: response
      .slice(0, 10)
      .map((item: any) => ({ params: { id: item.id } })),
    fallback: true,
  };
};
export default PostItem;
