import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";


export default function Tailwind() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [darkmode, setDarkmode] = useState(false)

    const handleSave = () => {
      alert( `Data Disimpan \n Nama: ${name} \n Email: ${email}`)
    }

    const handleTheme = () => {
      setDarkmode(!darkmode)
    }

  return(
    <>
       <div className={`flex justify-center items-center min-h-screen transition-all duration-500 ${darkmode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900' }`}>
            <div className="absolute top-4 right-4">
              <Button onClick={handleTheme}>{darkmode ? 'LightMode' : 'DarkMode'}</Button>
            </div>

         <Card className={`w-full max-w-sm p-4 transition-all duration-300 ${
          darkmode ? "bg-gray-800 shadow-lg" : "bg-white shadow-md"
        }`}>
          <CardContent className="space-y-4">
            <h2 className={`text-xl font-semibold text-center ${darkmode ? "text-white" : "text-black"}`}>Profile</h2>

            <Input type="text"
                   placeholder="Isi nama..."
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className={`${darkmode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
                    />

            <Input type="text" 
                   placeholder="Isi email..."
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className={`${darkmode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
                   />

            <Button onClick={handleSave} className={`w-full transition-all duration-300 ${darkmode ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"}`}
                >Simpan</Button>
          </CardContent>
        </Card>
       </div>
    </>
  )
}