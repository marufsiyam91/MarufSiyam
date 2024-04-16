

const About_info = ({title, info}) => {
  return (
    <div className="flex justify-between border-b text-white mb-4">
        <p className="font-urbanist text-[.9rem] esm:text-xl 2xl:text-2xl font-semibold esm:font-medium">{title}</p>
        <p className="font-urbanist text-[.9rem] esm:text-xl 2xl:text-2xl font-semibold esm:font-medium">{info}</p>
    </div>
  )
}

export default About_info