import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About SPS</h1>
                <p className="text-gray-500 md:text-xl">
                  Your trusted partner for logistics solutions from China to Canada
                </p>
              </div>
              <p className="text-gray-500">
                Founded in 2015, SPS has grown to become a leading logistics provider specializing in shipping
                from China to Canada. With offices in both countries, we bridge the gap between manufacturers and
                businesses, providing seamless logistics solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-royalblue-700 hover:bg-royalblue-800">Our Services</Button>
                <Button variant="outline" className="border-white bg-white text-royalblue-700 hover:bg-gray-100">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/202505131546.jpg"
                width={600}
                height={400}
                alt="SPS Team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-gray-500">
                Our mission is to simplify cross-border logistics between China and Canada, providing businesses of all
                sizes with reliable, efficient, and cost-effective shipping solutions. We aim to be the bridge that
                connects Chinese manufacturers with Canadian markets, enabling seamless trade and growth opportunities.
              </p>
              <p className="text-gray-500">
                We believe in building long-term relationships with our clients, becoming an extension of their team and
                a trusted partner in their supply chain. Our success is measured by the success of the businesses we
                serve.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <ul className="grid gap-3">
                {[
                  {
                    title: "Reliability",
                    description: "We deliver on our promises, ensuring your shipments arrive on time, every time.",
                  },
                  {
                    title: "Transparency",
                    description: "We believe in clear communication and no hidden fees or surprises.",
                  },
                  {
                    title: "Expertise",
                    description:
                      "Our team brings years of experience in international logistics and customs procedures.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We continuously improve our processes and adopt new technologies to serve you better.",
                  },
                ].map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-burgundy-700" />
                    <div>
                      <h3 className="font-bold">{value.title}</h3>
                      <p className="text-gray-500">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="bg-gray-50 py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">Our Locations</h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed">
                Strategically located Warehouse to serve you better
              </p>
            </div>
          </div>
          
          {/* 中国地址 */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10 text-center text-royalblue-800">China Warehouse</h3>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {[
                {
                  location: "ShenZhen",
                  address: "Unit 102, 1st Floor, Building 10, Yilisheng, Tangwei, Fuyong, Shenzhen, China",
                  email: "SZX@SinoPrimeshipping.com",
                },
                {
                  location: "ShangHai",
                  address: "No. 538, Longgao Road, Jiuting Town, Songjiang District, Shanghai, China",
                  email: "SHA@SinoPrimeshipping.com",
                },
                {
                  location: "YiWu",
                  address: "No. 101, Qiushi Road, Yiwu City, Jinhua City, Zhejiang Province, China",
                  email: "YIW@SinoPrimeshipping.com",
                },
              ].map((office, index) => (
                <div 
                  key={index} 
                  className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:border-royalblue-200 hover:translate-y-[-4px]"
                >
                  <h3 className="text-2xl font-bold text-royalblue-800 mb-2">{office.location}</h3>
                  <ul className="mt-6 space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-burgundy-50 p-2 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-burgundy-700" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{office.address}</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="rounded-full bg-burgundy-50 p-2 flex-shrink-0">
                        <Mail className="h-6 w-6 text-burgundy-700" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium">{office.email}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 加拿大地址 */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-10 text-center text-royalblue-800">Canada Warehouse</h3>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {[
                {
                  location: "Toronto",
                  address: "245 Walker Dr Brampton ON L6T 4H2",
                  email: "YYZ@SinoPrimeshipping.com",
                },
                {
                  location: "Vancouver",
                  address: "340-3771 Jacombs Road Richmond BC V6V2L9",
                  email: "YVR@SinoPrimeshipping.com",
                },
                {
                  location: "Calgary",
                  address: "7405 108 Avenue Southeast Calgary, AB T2C 5C8",
                  email: "YYC@SinoPrimeshipping.com",
                },
              ].map((office, index) => (
                <div 
                  key={index} 
                  className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:border-royalblue-200 hover:translate-y-[-4px]"
                >
                  <h3 className="text-2xl font-bold text-royalblue-800 mb-2">{office.location}</h3>
                  <ul className="mt-6 space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-burgundy-50 p-2 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-burgundy-700" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{office.address}</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="rounded-full bg-burgundy-50 p-2 flex-shrink-0">
                        <Mail className="h-6 w-6 text-burgundy-700" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium">{office.email}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses who trust us with their logistics
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "SPS has been instrumental in our growth. Their reliable shipping solutions have allowed us to scale our ecommerce business with confidence.",
                author: "Mark Thompson",
                company: "Canadian Imports Ltd.",
              },
              {
                quote:
                  "The team's knowledge of customs procedures saved us countless headaches. They've become an essential part of our supply chain.",
                author: "Lisa Chen",
                company: "Tech Innovations",
              },
              {
                quote:
                  "As a crowdfunding creator, their specialized fulfillment services ensured our backers received their products on time and in perfect condition.",
                author: "James Wilson",
                company: "NextGen Products",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-gray-600">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-royalblue-800 py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
              <p className="max-w-[700px] text-royalblue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our team today to discuss your logistics needs
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-royalblue-800 hover:bg-gray-100">Get a Quote</Button>
              <Button variant="outline" className="border-white bg-white text-royalblue-700 hover:bg-gray-100">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
