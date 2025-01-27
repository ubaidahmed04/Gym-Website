import "../globals.css";
export const metadata = {
  title: "Ideal Gym",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <section className="myfont flex flex-col bg-black min-h-screen max-h-full justify-center items-center" >
           
            <main className="flex-grow max-w-screen-xl w-full flex flex-col justify-center items-center mx-auto">
              {children}
            </main>
          
        </section>

      </body>
    </html>
  );
}
