import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";
import { bills, pharmacy, record, reminder, schedule, software, warehouse } from "../assets";

const Offer = () => {
  const saturationArr = [
    {
      id: 1,
      title: "Web Development",
      subtitle:
        "We are proficient in developing simple, technical, and complex web applications. We build aesthetically pleasing and resilient websites across all frameworks using JavaScript, React JS, Vue JS, Angular JS and many more.",
      img: schedule.src,
    },
    {
      id: 1,
      title: "Mobile Development",
      subtitle:
        "Discover our custom mobile app development services. Speecializing in native iOS and Android,        cross-platform, and hybrid apps, we excel in enterprise and e-commerce solutions. With expertise in AI and other cutting edge technologies, we've delivered 100+ apps since 2016, while ensuring the faster time-to-market. Check out what we have in store for you!",
      img: reminder.src,
    },
    {
      id: 1,
      title: "UI/UX Design",
      subtitle:
        "Our highly efficient UI/UX designers craft beautiful applications that promise astounding user experience. We consistently brain-storm on building elite designs that are functionally simple to use.",
      img: schedule.src,
    },
    {
      id: 1,
      title: "Deployment & Support",
      subtitle:
        "Burnt out from your past experience? No worries. We will help you enhance and deploy your product. We offer bug resolution, testing, efficiency check, peer review, and complete support to ensure that your product up and running in no time.",
      img: bills.src,
    },
    {
      id: 2,
      title: "Maintenance & Scaling",
      subtitle:
        "We offer maintenance and scaling service where we keep a constant check on performance. To do so, we do crash test, API failure check, Server failure check, bug resolution, addition of new features, agility, and performance enhancement.",
      img: record.src,
    },
    {
      id: 2,
      title: "Architecture Design",
      subtitle:
        "Empower your project's success with our specialized software architecture design services. Our seasoned team crafts tailored, scalable, and high-performing solutions, optimizing every aspect of your software. Elevate your technology foundation with our expertise.",
      img: software.src,
    },
  ];

  return (
    <div
      className="bg-blend-overlay bg-white/80 w-full py-5 md:pb-20 lg:h-[50vw] flex flex-col justify-evenly items-center bg-cover bg-center bg-no-repeat"
      id="product"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 mt-10 text-xl text-[#0E89E2] font-bold">
          <div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
          <div>Developing Solutions For The Future</div>
          <div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
        </div>
        <h2 className="lg:text-6xl text-xl font-bold text-[#0E89E2] text-center mb-8">
          <span className="lg:text-6xl text-xl font-thin text-black text-center">What</span> We Offer
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-7 lg:gap-10 justify-items-center">
        {saturationArr.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0, rotateY: 0 }}
              animate={{ scale: 1, opacity: 1, rotateY: 360 }}
              // whileHover={{ scale: 1.1 }}
              transition={{ delay: index * 0.1 }}
              exit={{ scale: 0, opacity: 0, rotateY: 0 }}
              className="shadow-xl group px-4 rounded-xl flex flex-col gap-5 justify-center items-start w-80 h-80 hover:shadow-2xl border-2 transition duration-500 ease-out"
            >
              <div className="bg-[#0E89E2] flex justify-center items-center p-2 w-12 h-12 rounded-xl">
                <img src={item.img} alt="product-img" />
              </div>

              <p className="text-xl font-bold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-700 via-pink-600 to-zinc-300 transition duration-500 ease-out">
                {item.title}
              </p>
              <p className="text-md text-gray-500 transition duration-500 ease-out">
                {item.subtitle?.length > 150 ? item?.subtitle?.slice(0, 150) + "..." : item?.subtitle}
              </p>
              <div className=" py-2 transition hover:scale-105 duration-500 ease-out text-sm font-medium hover:text-[#2d64a6]">
                <button className="">View Details</button>
                <EastIcon />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
