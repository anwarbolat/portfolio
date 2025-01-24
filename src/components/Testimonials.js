'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Anwar is a highly motivated and outcome-oriented UI/UX Designer who can understand the needs and motivations of users and the people he works with. He has a drive for perfection that balances nicely with his ability to deliver upon tight deadlines. All of which makes him an invaluable asset to any organisation.",
    author: "Adam Garnett",
    position: "Principal Solution Owner, Slalom Build"
  },
  {
    quote: "Worked with Anwar at AO. Anwar was a designer that always kept the user at the center of all he did. He was open and active in using research to shape and drive his designs.",
    author: "Thomas Hayes",
    position: "UX Research Manager, Userzoom"
  },
  {
    quote: "I've worked with Anwar on various projects; he is unquestionably a talented designer.",
    author: "Jonny Pathan",
    position: "Co-founder, Growfox"
  }
];

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4 leading-tight">Testimonials</h2>
          <p className="text-xl text-dimWhite leading-relaxed">What people say about working with me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column - Single Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card hover:border-primary-alpha/50 h-full"
          >
            <svg
              className="w-8 h-8 text-primary mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl text-dimWhite mb-6 leading-relaxed">{testimonials[0].quote}</p>
            <div>
              <p className="font-medium text-white text-xl leading-relaxed">– {testimonials[0].author}</p>
              <p className="text-dimWhite text-lg leading-relaxed">{testimonials[0].position}</p>
            </div>
          </motion.div>

          {/* Second Column - Stacked Cards */}
          <div className="space-y-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="card hover:border-primary-alpha/50"
              >
                <svg
                  className="w-8 h-8 text-primary mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-dimWhite mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white leading-relaxed">– {testimonial.author}</p>
                  <p className="text-dimWhite leading-relaxed">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
