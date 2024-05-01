import AwesomeTestimonial from "react-awesome-testimonials";

function Testimonials() {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-[-130px] mt-12">
        Testimonials
      </h1>

      <AwesomeTestimonial
        testimonials={[
          {
            name: "Eva",
            company: "Amazon",
            img_src: "https://i.ibb.co/84h8svL/eight.png",
            review:
              "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
          },
          {
            name: "Evelyn",
            company: "Netflix",
            img_src: "https://i.ibb.co/k8Jnx61/five.png",
            review:
              "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
          },
          {
            name: "Jack",
            company: "Google",
            img_src: "https://i.ibb.co/Yj8pMF8/four.png",
            review:
              "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
          },
        ]}
      />

      <div className="flex justify-center">
        <div className="w-full max-w-[1140px] h-px bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Testimonials;
