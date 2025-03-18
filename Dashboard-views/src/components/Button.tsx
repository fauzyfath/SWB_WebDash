import IconsLogout from "../assets/logout-icon.svg"

const Button = () => {
  return (
    <div className="absolute right-10 top-10">
        <button className="btn btn-primary flex justify-center items-center w-40 h-12 rounded-lg bg-zinc-100 ring-1 ring-slate-300 shadow-slate-300 drop-shadow-xl shadow-md gap-x-5 hover:bg-slate-300 select-none">
            <div className="w-6">
                <img src={IconsLogout} alt="" />
            </div>
            <h1 className="text-lg font-semibold">Logout</h1>
        </button>
    </div>
  )
}

export default Button