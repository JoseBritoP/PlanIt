import EventsSection from "@/components/shared/Home/EventsSection";
import HeroSection from "@/components/shared/Home/HeroSection";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import React from "react";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });
  return (
    <>
      <HeroSection />
      <EventsSection events={events} page={page} />
    </>
  );
}
