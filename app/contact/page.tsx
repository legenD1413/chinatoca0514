"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Quote } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('提交失败');
      }

      setIsSubmitted(true);
      toast.success('您的消息已成功提交！');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('提交失败，请稍后再试');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col">
      {/* Map Background Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0 z-0">
          <Image src="/contactus.jpg" alt="Map" fill className="object-cover" priority />
        </div>
      </section>

      {/* Contact Us Header */}
      <section className="bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Feel free to contact us about any questions you might have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Thank You!</h2>
                  <p className="text-gray-500">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="fullName" 
                        placeholder="Your full name" 
                        required 
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email address" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Please enter the phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Website URL
                    </label>
                    <Input 
                      id="website" 
                      type="url" 
                      placeholder="Please enter the website" 
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Type your message here" 
                      className="min-h-[120px]" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-royalblue-700 hover:bg-royalblue-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              {/* We Promise Section */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                {/* Email Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                      <Mail className="h-6 w-6 text-royalblue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Email</h3>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-royalblue-600"></div>
                        <p className="text-gray-600">Sales: sales@SinoPrimeShipping.com</p>
                      </div>
                      
                    
                  </div>
                </div>

             

                {/* Address Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-royalblue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Address</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-royalblue-600"></div>
                      <p className="text-gray-600">
                      Toronto:245 Walker Dr Brampton ON L6T 4H2,Canada<br />
                        
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 text-royalblue-600">
                  <Quote className="h-10 w-10" />
                </div>
                <p className="mb-6 text-gray-700">
                  SPS has been the best solution for my business. Their customer service team is incredibly responsive
                  and helpful. I highly recommend their services to anyone looking for reliable logistics solutions.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
          
          </div>

          {/* 中国地址 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-royalblue-800">Our Office&Warehouse</h3>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {[
                {
                  location: "ShenZhen",
                  address: "Unit 102, 1st Floor, Building 10, Yilisheng, Tangwei, Fuyong, Shenzhen, China",
                },
                {
                  location: "ShangHai",
                  address: "No. 538, Longgao Road, Jiuting Town, Songjiang District, Shanghai, China",
                },
                {
                  location: "YiWu",
                  address: "No. 101, Qiushi Road, Yiwu City, Jinhua City, Zhejiang Province, China",
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
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 加拿大地址 */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-royalblue-800">Canada Offices&warehouse</h3>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {[
                {
                  location: "Toronto",
                  address: "245 Walker Dr Brampton ON L6T 4H2",
                },
                {
                  location: "Vancouver",
                  address: "340-3771 Jacombs Road Richmond BC V6V2L9",
                },
                {
                  location: "Calgary",
                  address: "7405 108 Avenue Southeast Calgary, AB T2C 5C8",
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
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              Find answers to common questions about contacting us
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "What is your typical response time?",
                answer:
                  "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our customer support line for immediate assistance.",
              },
              {
                question: "Do you offer in-person consultations?",
                answer:
                  "Yes, we offer in-person consultations at our Toronto and Shenzhen offices. Please contact us to schedule an appointment with one of our logistics experts.",
              },
              {
                question: "How can I track my existing shipment?",
                answer:
                  "Existing customers can track their shipments through our online portal. If you're having trouble accessing your tracking information, please contact our customer service team.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold">{faq.question}</h3>
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-royalblue-800 py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[700px] text-xl text-white/90">
              Contact us today to learn more about our logistics solutions
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-royalblue-700 hover:bg-gray-100">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-white text-royalblue-700 hover:bg-gray-100">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
