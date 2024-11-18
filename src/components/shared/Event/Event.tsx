"use client";
import EventForm from "@/components/form/EventForm";
import { useSession } from "@clerk/nextjs";
import React from "react";

export default function EventComponent() {
  const { session } = useSession();
  const userId = session?.id as string;
  return (
    <div className="wrapper my-8">
      <EventForm userId={userId} type="Create" />
    </div>
  );
}
