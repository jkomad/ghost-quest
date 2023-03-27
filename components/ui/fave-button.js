import Link from "next/link";
import FavoriteIcon from "../icons/favorite-icon";

const FaveButton = ({ text, link }) => {
  return (

    <Link href={`/${link}`} className={`w-3/4 flex flex-row p-2 border-solid border-2 hover:bg-slate-900 rounded-md m-1 hover:border-purple-600 hover:cursor-pointer border-slate-700`}>
      <div
        className="w-full text-base text-slate-300 hover:text-purple-400"
      >
        <h2 className="text-center">
          {text}
        </h2>
      </div>
      <button>
        <FavoriteIcon />
      </button>
    </Link>
  );
};

export default FaveButton;
