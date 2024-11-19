import EventsSection from "@/components/shared/Home/EventsSection";
import HeroSection from "@/components/shared/Home/HeroSection";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

import React from "react";

export default async function Home({ searchParams }: SearchParamProps) {
  const search = await searchParams;
  const page = Number(search?.page) || 1;
  const searchText = (search?.query as string) || "";
  const category = (search?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <HeroSection />
      <EventsSection
        category={category}
        page={page}
        searchText={searchText}
        events={events}
      />
    </>
  );
}
