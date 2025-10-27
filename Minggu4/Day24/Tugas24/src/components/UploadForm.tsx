import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const schema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  file: z
    .any()
    .refine((file) => file?.length === 1, "File wajib diunggah")
    .refine((file) => ACCEPTED_TYPES.includes(file?.[0]?.type), "Format harus JPG atau PNG")
    .refine((file) => file?.[0]?.size <= MAX_FILE_SIZE, "Ukuran maksimal 2MB"),
});

type FormData = z.infer<typeof schema>;

export default function UploadForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [preview, setPreview] = useState<string | null>(null);

  const file = watch("file");

  const handlePreview = () => {
    const selected = file?.[0];
    if (selected) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Data form:", data);
    alert("Form berhasil dikirim!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-xl font-semibold">Form Upload Gambar</h2>

      <input
        {...register("name")}
        placeholder="Nama"
        className="w-full border px-3 py-2 rounded-md"
      />
      {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}

      <input
        type="file"
        accept="image/*"
        {...register("file")}
        onChange={handlePreview}
        className="w-full border px-3 py-2 rounded-md cursor-pointer"
      />
    {errors.file && <p className="text-sm text-red-600">{errors.file.message}</p>}


      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-auto rounded-md border mt-2"
        />
      )}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
