import EventForm from "@/components/form/EventForm";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function EventComponent() {
  const user = await currentUser();
  const userId = user?.id as string;

  return (
    <div className="wrapper my-8">
      <EventForm userId={userId} type="Create" />
    </div>
  );
}
