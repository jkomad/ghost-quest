import BackIcon from "@/components/icons/back-icon";
import { useUser } from "@supabase/auth-helpers-react";

const FavoritesHeader = ({ profile, isLoading }) => {
  const user = useUser();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div
      className="border-b-white border-b flex justify-between mb-5"
      id="favorites-header"
    >
      <div className="m-2 text-left text-3xl">
        <div className="flex flex-row gap-2 items-end">
          <div className="m-2 rounded-full w-16 h-16 border-2 border-slate-300 overflow-clip">
            <img src={profile?.profile_pic} alt="Profile pic" />
          </div>
          <div className="flex flex-col">
            {profile?.id === user?.id ? (
              <h1 className="w-full">Your Favorites</h1>
            ) : (
              <h1 className="w-full">{`${profile?.username}'s Favorites`}</h1>
            )}
            <div className="text-slate-500 italic text-base">
              Favorite Haunts...
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <BackIcon />
      </div>
    </div>
  );
};

export default FavoritesHeader;
