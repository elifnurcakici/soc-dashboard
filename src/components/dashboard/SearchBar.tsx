import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react"

interface Props {
    value: string; 
    onChange: (val: string) => void; 
}

function SearchBar({ value, onChange }: Props) { 
    return (
        <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <Input
        className="h-11 w-full rounded-xl bg-[#111827] border border-[#1F2937] text-white placeholder:text-gray-400 pl-10 focus:border-green-500 focus:ring-green-500"
        placeholder="Search IP..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>

    );
}

export default SearchBar