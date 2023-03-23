import Head from "next/head";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Fragment } from "react";
import Header from "@/components/header";
import HomeHeader from "@/components/home/home-header";
import HomeButton from "@/components/ui/home-button";

// HOME VIEW/ROOT

// Main Nav component - include this in Layout component
// User Icon Component - link to user-profile page
// Search Icon component - filter component
// Favorites Icon component - link to favorites page

// Displays pins of nearby locations (if there are any)

export default function Home({ locations }) {
  const clickText = "Click To See Nearby Locations"
  const favesText = "Click To See Your Favorites"
  const loginText = "Login or Create an Account"

  const locURL = "locations"
  const favURL = `user/[id]/favorites`
  const loginURL = `user`

  return (
    <Fragment>
      <Head>
        <title>GHOST QUEST</title>
        <meta
          name="description"
          content="Embark on a journey to hunt for ghosts across the country."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="ghost-quest-high-resolution-color-logo.png"
        />
      </Head>
      <div className="items-center text-white flex flex-col gap-3">
        <HomeHeader />
        <img
          className="flex w-24 h-24"
          src="ghost-quest-website-favicon-color.png"
          alt="ghost quest logo"
        />
        <div className="w-full">
        <HomeButton link={locURL} text={clickText} />
        <HomeButton link={favURL} text={favesText} />
        <HomeButton link={loginURL} text={loginText} />
        </div>
      </div>
    </Fragment>
  );
}
