import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import EventForm from "./EventForm";
import { EventFormData } from "@/lib/validators/EventSchema";

interface Props {
  onAdd: (data: EventFormData) => boolean;
}

function EventFormCard({ onAdd }: Props) {
  return (
    <Card className="rounded-2xl border border-[#1F2937] bg-[#111827] shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Create Event</CardTitle>
      </CardHeader>

      <CardContent className="pt-2">
        <EventForm onAdd={onAdd} />
      </CardContent>
    </Card>
  );
}

export default EventFormCard;