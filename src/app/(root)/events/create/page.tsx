import EventComponent from "@/components/shared/Event/Event";

const CreateEvent = () => {

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <EventComponent/>
    </>
  );
};

export default CreateEvent;
