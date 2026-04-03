import { Input } from "@/components/ui/Input";

interface Props {
    value: string; 
    onChange: (val: string) => void; 
}

function SearchBar({ value, onChange }: Props) { 
    return (
        <Input
            placeholder="Search IP..."
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}

export default SearchBar