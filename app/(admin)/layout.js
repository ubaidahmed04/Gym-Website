import Sidebar from "@/components/Sidebar";
import "../globals.css";
import { Providers } from "../Redux/Provider";

export default function Layout({children}){
  
    return(
      <html lang="en">
       <body
        className="myfont flex  min-h-screen  w-full h-full bg-blue-gray-500 " 
      >
        <>
      <Sidebar/>
        <Providers>
        <main className=" max-w-screen-xl px-4  flex justify-center py-16 w-full h-full  ">
          {children}
        </main>
        </Providers>
        </>
      </body>
    </html>
    )
}