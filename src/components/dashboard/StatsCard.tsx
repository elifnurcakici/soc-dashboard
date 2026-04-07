import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface Props {
  title: string;
  value: string;
  description: string;
}

function StatsCard({ title, value, description }: Props) {
  return (
    <Card className="rounded-2xl border border-[#1F2937] bg-[#111827] shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02]">
  <CardHeader className="pb-1">
    <CardTitle className="text-sm font-medium text-gray-400">
      {title}
    </CardTitle>
  </CardHeader>

  <CardContent>
    <div className="text-3xl font-bold text-white">{value}</div>

    <p className="mt-2 text-sm text-green-400 font-medium">
      {description}
    </p>
  </CardContent>
</Card>
  );
}

export default StatsCard;