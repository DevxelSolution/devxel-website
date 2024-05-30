
const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-400 py-10 mt-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-around">
					<div className="w-full md:w-1/2 mb-6 md:mb-0 ">
						<h6 className="text-white text-lg uppercase mb-4">About</h6>
						<p className="text-justify pr-5">
							At Devxel, we empower high school graduates and college freshmen through comprehensive training programs focused on interview preparation, covering Data Structures and Algorithms (DSA), front-end and back-end development, and the MERN stack. We also specialize in building and maintaining robust websites, web applications, and mobile applications. By bridging the gap between academic knowledge and real-world application, we prepare students for successful tech careers while delivering innovative, high-quality solutions tailored to meet our clients' needs.
						</p>
					</div>

					<div className="flex flex-wrap justify-around w-full md:w-[40%] ">
						<div className="w-full md:w-1/4 mb-6 md:mb-0 pl-2">
							<h6 className="text-white text-lg uppercase mb-4">Categories</h6>
							<ul className="list-none">
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Web application</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">UI Design</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Website</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Mobile application</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Interview Preparation</a></li>
							</ul>
						</div>

						<div className="w-full md:w-1/4 pl-2">
							<h6 className="text-white text-lg uppercase mb-4">Quick Links</h6>
							<ul className="list-none">
								<li><a href="#" className="text-gray-400 hover:text-blue-600">About Us</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Contact Us</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Contribute</a></li>
								<li><a href="#" className="text-gray-400 hover:text-blue-600">Privacy Policy</a></li>
							</ul>
						</div>
					</div>

				</div>


				<hr className="border-gray-700 my-6" />
				<div className="flex flex-wrap items-center justify-between">
					<div className="w-full md:w-1/2 text-center md:text-left">
						<p className="text-gray-400">Copyright &copy; 2024 All Rights Reserved by
							<a href="#" className="text-blue-600 hover:underline"> DEVXEL</a>.
						</p>
					</div>

					<div className="w-full md:w-1/2 text-center md:text-right">
						<ul className="list-none inline-flex">
							<li><a className="bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white p-2 rounded-full" href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a className="bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white p-2 rounded-full ml-2" href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a className="bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white p-2 rounded-full ml-2" href="#"><i className="fa fa-dribbble"></i></a></li>
							<li><a className="bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white p-2 rounded-full ml-2" href="#"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
