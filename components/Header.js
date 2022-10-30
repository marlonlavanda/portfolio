import Nav from "./Nav"

export default function Header() {
  return (
    <header className="bg-mlr-primary h-[90px] flex justify-center items-center">
      <div className="container flex justify-between">
        <div className="h-[90px] flex items-center">
          <span className="font-poppins font-black text-white text-2xl">
            mlr
          </span>
        </div>
        <Nav />
      </div>
    </header>
  )
}
