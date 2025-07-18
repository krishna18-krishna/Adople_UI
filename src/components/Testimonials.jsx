import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Adople has completely transformed how we handle support tickets—response time is down by 60%!",
      author: "Head of IT",
      company: "Mid-Sized SaaS Firm",
      metric: "60% faster resolution"
    },
    {
      quote: "Our HR team now answers employee queries in seconds instead of hours.",
      author: "HR Manager",
      company: "Global Enterprise",
      metric: "70% workload reduction"
    },
    {
      quote: "The AI understands our context perfectly and provides accurate answers every time.",
      author: "Support Director",
      company: "Tech Startup",
      metric: "40% accuracy improvement"
    }
  ];

  const metrics = [
    { value: '60%', label: 'Faster ticket resolution' },
    { value: '70%', label: 'Reduction in agent workload' },
    { value: '40%', label: 'Improvement in search accuracy' },
    { value: '3x', label: 'Boost in employee productivity' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600">
            See how Adople is transforming enterprise operations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
                <div className="mt-2 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;