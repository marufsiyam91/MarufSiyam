

const Skillset = ({icon, title, color}) => {
  return (
        <div className="flex flex-col items-center justify-between p-6 esm:p-8 w-[180px] h-[220px] esm:h-[270px] gap-6 border border-orange-100 rounded-[5.5rem] esm:rounded-[6rem] group/circle">
            <div className="w-24 h-24 flex items-center justify-center text-[3rem] bg-slate-700 rounded-full group-hover/circle:-translate-y-2 transition" style={{color: color}}>{icon}</div>
            <p className="text-orange-200 font-primary text-lg font-medium">{title}</p>
        </div>
  )
}

export default Skillset