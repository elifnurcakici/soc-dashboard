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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">IP Address</label>
        <Input placeholder="Enter IP address" {...register("ip")} />
        {errors.ip && (
          <p className="text-sm text-red-500">{errors.ip.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Date</label>
        <Input type="date" {...register("date")} />
        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      <Button type="submit" className="h-11 w-full rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition">
        Add Event
      </Button>
    </form>
  );
}

export default EventForm
