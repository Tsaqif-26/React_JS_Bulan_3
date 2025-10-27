import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
    hobbies: z.array(z.object({name: z.string().min(1, "Hobi Wajib diisi")}))
})

type FormData = z.infer<typeof schema>

export default function DynamicForm() {
    
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            hobbies: [{name: ""}]
        }
    })

    const {fields, append, remove} = useFieldArray({
        control,
        name: "hobbies"
    })

    const onSubmit = (data: FormData) => {
        console.log("Hobi: " ,data.hobbies);
    }

    return(
           <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-xl font-semibold">Daftar Hobi</h2>

      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 items-center">
          <input
            {...register(`hobbies.${index}.name`)}
            placeholder={`Hobi ${index + 1}`}
            className="flex-1 border px-3 py-2 rounded-md"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500 hover:text-red-700"
          >
            Hapus
          </button>
        </div>
      ))}

      {errors.hobbies && (
        <p className="text-sm text-red-600">{errors.hobbies.message}</p>
      )}

      <button
        type="button"
        onClick={() => append({ name: "" })}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Tambah Hobi
      </button>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        Submit
      </button>
    </form>
    )
}