import Sidebar from "@/components/Sidebar";
import "../globals.css";

export default function Layout({children}){
  
    return(
      <html lang="en">
       <body
        className="myfont flex  min-h-screen w-full h-full bg-blue-gray-500 " 
      >
        
      <Sidebar/>
        <main className=" max-w-screen-xl px-4 py-16 w-full h-full  ">
          {children}
        </main>
       
      </body>
    </html>
    )
}