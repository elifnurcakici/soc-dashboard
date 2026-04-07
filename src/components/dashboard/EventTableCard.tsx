import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import EventTable from "./EventTable";
import Event from "@/types/Event";

interface Props {
  data: Event[];
  onDelete: (id: string) => void;
}

function EventTableCard({ data, onDelete }: Props) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-green-500/20 to-transparent p-[1px]">
    <Card className="rounded-2xl border border-[#1F2937] bg-[#111827] shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">
          Event List
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-2">
        <EventTable data={data} onDelete={onDelete} />
      </CardContent>
    </Card>
    </div>
  );
}

export default EventTableCard;