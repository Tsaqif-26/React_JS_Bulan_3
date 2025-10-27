import { useState } from "react"
import { useForm } from "react-hook-form"

interface MultiStepData{
    name: string
    address: string
}

export default function MultiStepForm() {

    const [step, setStep] = useState(1)

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<MultiStepData>()

    const nextStep = () => setStep((step) => step + 1)
    const prevStep = () => setStep((step) => step - 1)

    const onSubmit = async (data: MultiStepData) => {
        await new Promise ((r) => setTimeout(r, 1000))
        console.log("Multi-step data", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-4">
            <div className="text-sm text-gray-500">
                Step {step} of 2
            </div>

            {step === 1 && (
                <>
                    <input type="text" placeholder="Nama..."  className="w-full border rounded-md px-3 py-2"
            {...register("name", { required: "Nama wajib diisi" })}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>} 

          <button  type="button"
            onClick={nextStep}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            > Next </button>
                </>
            )}

            {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Alamat..."
            className="w-full border rounded-md px-3 py-2"
            {...register("address", { required: "Alamat wajib diisi" })}
          />
          {errors.address && <p className="text-sm text-red-600">{errors.address.message}</p>}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 bg-gray-300 py-2 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 py-2 rounded-md text-white transition ${
                isSubmitting
                  ? "bg-gray-500 cursor-wait"
                  : "bg-green-600 hover:bg-green-700 cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </>
      )}
        </form>
    )

}