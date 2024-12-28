import Sidebar from "@/components/Sidebar";
import "../globals.css";

export default function Layout({children}){
  
    return(
      <html lang="en">
       <body
        className="myfont flex  min-h-screen w-full h-full bg-blue-gray-500 " 
      >
        
      <Sidebar/>
        <main className=" max-w-screen-xl flex items-center justify-center py-16 w-full h-full mx-auto ">
          {children}
        </main>
       
      </body>
    </html>
    )
}