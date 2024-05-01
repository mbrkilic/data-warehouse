function TrySection() {
  return (
<div className="container max-w-[1140px] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
                Try for <span className="text-[#9c69e2]">free!</span>
            </h1>
            <p className="text-lg md:text-xl">Get limited 1 week free try our features!</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-4 md:mt-0">
            <a href="#features" className="font-bold bg-[#f063b8] hover:bg-white text-white hover:text-[#f063b8] rounded-full px-4 py-2 mb-2 sm:mb-0 sm:mr-4 shadow-lg transition-colors duration-300">
                Learn More
            </a>
            <a href="#help" className="bg-white font-semibold text-black hover:bg-pink-600 hover:text-white rounded-full px-4 py-2 shadow-lg transition-colors duration-300">
                Request Demo
            </a>
        </div>
    </div>
</div>

  );
}

export default TrySection;
