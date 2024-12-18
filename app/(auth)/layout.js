import "../globals.css";

export default function Layout({children}){
  
    return(
      <html lang="en">
       <body
        className="myfont flex flex-col min-h-screen w-full h-full items-center justify-center bg-darkBlue" 
      >
        <main className=" max-w-screen-xl flex items-center justify-center py-16 w-full h-full mx-auto ">
          {children}
        </main>
      </body>
    </html>
    )
}