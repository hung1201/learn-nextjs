import { useRouter } from "next/router";
type Props = {
  id: Number;
};

const PostParams = ({ id, ...props }: Props) => {
  const router = useRouter();
  return (
    <div>
      PostParams
      <span>{JSON.stringify(router.query)}</span>
    </div>
  );
};

export default PostParams;
