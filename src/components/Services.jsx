import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<div className="relative w-full mt-24 bg-white mx-auto px-10">
			{/* Introduction section */}
			<div className="mb-8">
				<h2 className="text-3xl font-bold mb-4">Our Services</h2>
				<p className="text-lg text-gray-600">
					We offer a range of professional services tailored to your needs. Choose us for quality, reliability, and innovation.
				</p>
			</div>

			<div className="mb-10 p-6 flex flex-col items-center w-[60%] mx-auto">
				<h2 className="text-2xl font-semibold mb-4">What Do We Offer ?</h2>
				<p className="text-gray-700 text-center ">
					At the core of our service offerings lies expertly crafted software solutions that drive your business forward. From UI/UX Design to Custom Application Development, from Maintenance & Support to Technology Migration, we've got everything for your unique business needs.
				</p>
			</div>


			{/* Services card section */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<ServiceCard
					title="Web Development"
					content="We are proficient in developing simple, technical, and complex web applications. We build aesthetically pleasing and resilient websites across all frameworks using JavaScript, React JS, Vue JS, Angular JS and many more."
				/>
				<ServiceCard
					title="Mobile Development"
					content="Discover our custom mobile app development services. Speecializing in native iOS and Android, 
					cross-platform, and hybrid apps, we excel in enterprise and e-commerce solutions. With expertise in AI and other cutting edge technologies, we've delivered 100+ apps since 2016, while ensuring the faster time-to-market. Check out what we have in store for you!"
				/>
				<ServiceCard
					title="UI/UX Design"
					content="Our highly efficient UI/UX designers craft beautiful applications that promise astounding user experience. We consistently brain-storm on building elite designs that are functionally simple to use."
				/>

				<ServiceCard
					title="UI/UX Design"
					content="Our highly efficient UI/UX designers craft beautiful applications that promise astounding user experience. We consistently brain-storm on building elite designs that are functionally simple to use."
				/>

				<ServiceCard
					title="UI/UX Design"
					content="Our highly efficient UI/UX designers craft beautiful applications that promise astounding user experience. We consistently brain-storm on building elite designs that are functionally simple to use."
				/>

				<ServiceCard
					title="UI/UX Design"
					content="Our highly efficient UI/UX designers craft beautiful applications that promise astounding user experience. We consistently brain-storm on building elite designs that are functionally simple to use."
				/>
				{/* Add more ServiceCard components for additional services */}
			</div>
		</div>
	);
};

export default Services;
