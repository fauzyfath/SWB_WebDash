import Icons from '../assets/trash-can-with-cover-svgrepo-com.svg'

type InfoContainerProps = {
    name: string;
    location: string;
    status: "active" | "full" | "deactivate";
};

function DeviceContainer({ name, location, status }:InfoContainerProps) {

  const statusColorBorder = {
    active: "border-r-green-500",
    full: "border-r-yellow-500",
    deactivate: "border-r-slate-500"
  }
  const statusColorText = {
    active: "text-green-500",
    full: "text-yellow-500",
    deactivate: "text-slate-500"
  }

  return (
    <button className={`container flex flex-row items-center w-full h-28 shadow-lg shadow-slate-200 ring-1 ring-inner ring-slate-300 rounded-xl px-2 xl:gap-x-2 mb-4 2xl:gap-x-8 border-r-[20px] hover:bg-slate-300 select-none ${statusColorBorder[status]}`}>
      <figure className='2xl:w-16 xl:w-12 w-10 flex-none'>
          <img src={Icons} alt="" />
      </figure>
      <section className="flex flex-col whitespace-nowrap items-start overflow-hidden xl:text-sm 2xl:text-lg">
          <h1 className='font-bold'>{name}</h1>
          <p className='text-slate-500'>{location}</p>
          <p className={`${statusColorText[status]}`}>{status}</p>
      </section>
    </button>
  )
};
  
export default DeviceContainer;