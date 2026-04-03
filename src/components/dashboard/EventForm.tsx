import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import eventSchema, { EventFormData } from "@/lib/validators/EventSchema";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input"

interface Props{
    onAdd: (data : EventFormData) => boolean; 
}

function EventForm({onAdd}:Props){ 
    const { 
        register, 
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema), 
 });

 const onSubmit = (data: EventFormData) => { 
    const success = onAdd(data); 

    if(!success){
        setError("ip", {
            type: "manual",
            message: "This IP address is already added.",
        });
        return;
    }
    reset(); 
 };

 return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 rounded-xl bg-white p-4 shadow"
    >
      <div>
        <Input placeholder="IP" {...register("ip")} />
        {errors.ip && (
          <p className="mt-1 text-sm text-red-500">{errors.ip.message}</p>
        )}
      </div>

      <div>
        <Input type="date" {...register("date")} />
        {errors.date && (
          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      <Button type="submit" className="border border-gray-400 px-4 py-2 rounded">Add</Button>
    </form>
  );
}

export default EventForm
