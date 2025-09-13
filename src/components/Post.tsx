import Image from "./Image";
import Link from "next/link";
import PostInfo from "./PostInfo";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Junidepp reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image
            path="public/general/post.jpeg"
            alt=""
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col ">
          {/* TOP */}
          <div className="w-full flex justify-between">
            <Link href={`/Junidepp`} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <Image
                  path="public/general/post.jpeg"
                  alt=""
                  w={100}
                  h={100}
                  tr={true}
                />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Junidepp</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @junaidakram1
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 day ago</span>
                )}
              </div>
            </Link>{" "}
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link href={`/Junidepp/status/123`}>
            <p className={`${type === "status" && "text-lg"}  leading-[21px]`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>
          </Link>
          <div className="rounded-lg overflow-hidden mt-2">
            <Image
              path="public/general/post.jpeg"
              alt=""
              w={600}
              h={600}
              className="object-cover"
            />
          </div>

          {type === "status" && (
            <span className="text-textGray">5:35 AM · Sep 13, 2025</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
