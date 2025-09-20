import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 h-screen">
      <div className="sticky top-0 flex flex-col gap-4 bg-black pb-2 z-10">
        <Search />
        <PopularTags />
      </div>

      <div className="sticky top-20">
        <Recommendations />
      </div>

      <div className="text-textGray text-sm flex gap-x-4 flex-wrap mt-auto">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 JD Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;
