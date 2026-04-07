import Event from "@/types/Event";
import {Button} from "@/components/ui/Button"

interface Props{ 
    data: Event[]; 
    onDelete : (id: string) => void; 
}

function EventTable({data, onDelete }: Props){ 
    return(
        <div className="bg-gray-200 p-4 rounded-xl shadow">
            <table className="w-full"> 
                <thead> 
                    <tr className="text-left">
                        <th className="pb-2">IP</th>
                        <th className="pb-2">Date</th>
                        <th className="pb-2"></th>
                    </tr>
                </thead>
                <tbody> 
                    {data.length === 0 ? (
                     <tr>
                        <td colSpan={3} className="py-4 text-sm text-gray-500">
                            No record found.
                        </td>
                    </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id} className="transition duration-150 hover:bg-green-500/10">
                                <td className="py-2">{item.ip}</td>
                                <td className="py-2">{item.date}</td>
                                <td className="py-2"> 
                                <Button  className="bg-red-500/10 text-red-400 hover:bg-red-500/20"
                                    variant="destructive" 
                                    size="sm"
                                    onClick={() => onDelete(item.id)}
                                >Delete
                                </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EventTable
