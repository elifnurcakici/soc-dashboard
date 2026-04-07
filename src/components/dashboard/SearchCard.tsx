import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SearchBar from "./SearchBar";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchCard({ value, onChange }: Props) {
  return (
    <Card className="rounded-2xl border border-[#1F2937] bg-[#111827] shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">
          Search Events
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-2">
        <SearchBar value={value} onChange={onChange} />
      </CardContent>
    </Card>
  );
}

export default SearchCard;