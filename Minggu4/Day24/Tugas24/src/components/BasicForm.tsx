import { useForm } from "react-hook-form"

interface FormData {
    password: string
    email: string
}


export default function BasicForm() {

        const {register, handleSubmit, formState: {errors, isSubmitting},} = useForm<FormData>()

        const onSubmit = async (data: FormData) => {
            // await new promise ((resolve) => setTimeout(resolve,1000))
            console.log(data);
        }

    return <>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-4">

             <div>
                <input type="email"  className="w-full border rounded-md px-3 py-2" placeholder="Email..." {...register("email", {required: 'Email is required.'})}/>

                {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
            </div>

            <div>
                <input type="password" className="w-full border rounded-md px-3 py-2" placeholder="Password..." {...register("password", {required: 'Password is required.'})}/>

                {errors.password && (
                    <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
            </div>

            <div>
                <button type="submit"   className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </div>
        </form>
    </>
}