/* eslint-disable @typescript-eslint/no-explicit-any */
import Collection from "@/components/card/Collection";
import React from "react";

type Event = {
  data: any;
  totalPages: number;
} | undefined

interface EventsSectionProps {
  page: number;
  events: Event
}

export default async function EventsSection({
  events,
  page,
}: EventsSectionProps) {
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">
        Trust by <br /> Thousands of Events
      </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        {/* //TODO: Search */}
        {/* //TODO: CategoryFilter */}
      </div>

      <Collection
        data={events?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={6}
        page={page}
        totalPages={events?.totalPages}
      />
    </section>
  );
}
