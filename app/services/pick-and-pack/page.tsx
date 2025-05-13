import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, TruckIcon, ClipboardCheck, ShoppingBag, BarChart4 } from "lucide-react"
import Link from "next/link"

export default function PickAndPackPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/202505101616.jpg"
            alt="Pick and Pack Services Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6 text-gray-800">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Professional Pick & Pack Services</h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Our pick and pack services ensure your orders are accurately delivered to customers. Through precise inventory management and professional packaging processes, we provide comprehensive order fulfillment solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-lg font-medium">Accurate Order Picking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-lg font-medium">Professional Packaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-lg font-medium">Custom Brand Packaging</span>
                </li>
              </ul>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Link href="/get-a-quote">
                  <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-800">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/202505121748.png"
                width={600}
                height={400}
                alt="Pick and Pack Service"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Pick and Pack Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What is Pick & Pack Service?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">
                Pick and pack is a crucial process in e-commerce and logistics, involving selecting specific products for an order from the warehouse and securely packaging them for shipment.
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-lg">
                Our professional team uses advanced inventory management systems to ensure each order is completed accurately, reducing error rates and increasing customer satisfaction.
              </p>
              <ul className="space-y-2">
                {[
                  "Reduced order error rates",
                  "Faster order processing",
                  "Lower risk of damage during transport",
                  "Professional custom packaging services"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/202505121755.png"
                width={600}
                height={400}
                alt="Pick and Pack Process"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Pick & Pack Advantages</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional pick and pack services can significantly improve your business efficiency and customer experience
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Precise Inventory Management",
                description:
                  "Our systems track inventory levels in real-time, ensuring no stockouts or overstocking during order fulfillment.",
                icon: BarChart4,
              },
              {
                title: "Efficient Picking Process",
                description:
                  "Optimized warehouse layout and picking routes significantly reduce processing time and improve order handling efficiency.",
                icon: ShoppingBag,
              },
              {
                title: "Professional Packaging Services",
                description:
                  "We select the most appropriate packaging materials and methods based on product characteristics to ensure adequate protection during transport.",
                icon: Package,
              },
              {
                title: "Custom Brand Packaging",
                description:
                  "We provide customized packaging services, including brand logos and custom packaging materials to enhance brand recognition.",
                icon: ClipboardCheck,
              },
              {
                title: "Quality Inspection Process",
                description:
                  "Each order undergoes strict quality checks before packaging to ensure products meet standards and reduce return rates.",
                icon: ClipboardCheck,
              },
              {
                title: "Global Shipping Integration",
                description:
                  "Our pick and pack services seamlessly integrate with global logistics networks to ensure your products reach customers worldwide quickly.",
                icon: TruckIcon,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-5px] hover:border-blue-200"
              >
                <div className="mb-4 rounded-full bg-gray-100 p-3 text-blue-700 w-fit">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="mb-4 flex-1 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-8">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Pick & Pack Process</h2>
              <p className="text-lg text-gray-600 md:text-xl max-w-[800px] mx-auto">
                Efficient and precise six-step process ensuring each order is accurately delivered to customers
              </p>
            </div>
          </div>
          
          {/* 流程部分 - 在大屏幕显示6列，中屏幕3列，小屏幕2列 */}
          <div className="mx-auto mt-16">
            {/* 桌面端水平流程 - 只在大屏幕显示 */}
            <div className="hidden lg:grid lg:grid-cols-6 lg:gap-x-8 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Order Receipt",
                  description:
                    "System automatically receives and validates customer orders.",
                },
                {
                  step: "2",
                  title: "Order Assignment",
                  description:
                    "Orders assigned to pickers with optimized picking routes.",
                },
                {
                  step: "3",
                  title: "Product Picking",
                  description: 
                    "Pickers locate required products following system guidance.",
                },
                {
                  step: "4",
                  title: "Quality Check",
                  description: 
                    "Products inspected for quality and specification compliance.",
                },
                {
                  step: "5",
                  title: "Packaging",
                  description: 
                    "Products packaged according to specific requirements.",
                },
                {
                  step: "6",
                  title: "Shipping",
                  description: 
                    "Shipping labels and documents prepared for delivery.",
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center px-4 relative pb-8">
                  {/* 连接线 - 除了最后一个元素外都显示 */}
                  {index < 5 && (
                    <div className="absolute h-[2px] bg-burgundy-200 w-[calc(100%-4rem)] right-[-25%] top-[40px] z-0"></div>
                  )}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-burgundy-700 shadow-lg relative z-10 mb-6 border-2 border-burgundy-200">
                    {step.step}
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-[200px] mx-auto text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 平板端3列布局 */}
            <div className="hidden md:grid md:grid-cols-3 lg:hidden gap-y-12 gap-x-8 max-w-3xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Order Receipt",
                  description:
                    "System automatically receives and validates customer orders.",
                },
                {
                  step: "2",
                  title: "Order Assignment",
                  description:
                    "Orders assigned to pickers with optimized picking routes.",
                },
                {
                  step: "3",
                  title: "Product Picking",
                  description: 
                    "Pickers locate required products following system guidance.",
                },
                {
                  step: "4",
                  title: "Quality Check",
                  description: 
                    "Products inspected for quality and specification compliance.",
                },
                {
                  step: "5",
                  title: "Packaging",
                  description: 
                    "Products packaged according to specific requirements.",
                },
                {
                  step: "6",
                  title: "Shipping",
                  description: 
                    "Shipping labels and documents prepared for delivery.",
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center px-4 pb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-burgundy-700 shadow-lg mb-5 border-2 border-burgundy-200">
                    {step.step}
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-base font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-[200px] mx-auto text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 移动端2列布局 */}
            <div className="grid grid-cols-2 md:hidden gap-y-10 gap-x-6 max-w-lg mx-auto">
              {[
                {
                  step: "1",
                  title: "Order Receipt",
                  description:
                    "System automatically receives and validates customer orders.",
                },
                {
                  step: "2",
                  title: "Order Assignment",
                  description:
                    "Orders assigned to pickers with optimized picking routes.",
                },
                {
                  step: "3",
                  title: "Product Picking",
                  description: 
                    "Pickers locate required products following system guidance.",
                },
                {
                  step: "4",
                  title: "Quality Check",
                  description: 
                    "Products inspected for quality and specification compliance.",
                },
                {
                  step: "5",
                  title: "Packaging",
                  description: 
                    "Products packaged according to specific requirements.",
                },
                {
                  step: "6",
                  title: "Shipping",
                  description: 
                    "Shipping labels and documents prepared for delivery.",
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center px-2 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-burgundy-700 shadow-md mb-3 border-2 border-burgundy-200">
                    {step.step}
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-snug max-w-[150px] mx-auto text-xs">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 添加移动版视图的优化 */}
          <div className="mt-12 text-center lg:hidden">
            <Link href="/how-it-works">
              <Button variant="outline" className="bg-white border-blue-600 text-blue-700 hover:bg-blue-50">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/202505121818.jpg"
                width={500}
                height={400}
                alt="Success Case Study"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Success Story: Electronics Brand</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">
                A well-known electronics brand sought to improve their order fulfillment process and increase customer satisfaction. Through our pick and pack services, they achieved significant business growth.
              </p>
              <ul className="space-y-2">
                {[
                  "Order error rate reduced from 3.5% to 0.1%",
                  "Order processing time reduced by 60%",
                  "Customer satisfaction increased by 25%",
                  "Warehouse costs reduced by approximately 30%"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customer Testimonials</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what our customers have to say
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "SPS's pick and pack services helped us reduce shipping damage rates by 95%, significantly decreasing customer returns. Their professional team impressed us.",
                author: "Mr. Zhang",
                company: "Electronics Retailer"
              },
              {
                quote:
                  "Since we started using SPS's pick and pack services, our order processing speed has tripled, and customer feedback on packaging quality has been extremely positive.",
                author: "Ms. Li",
                company: "Fashion Brand Manager"
              },
              {
                quote:
                  "Their custom packaging services significantly enhanced our brand image, with customers sharing unboxing videos on social media much more frequently.",
                author: "Mr. Wang",
                company: "Home Goods Supplier"
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 opacity-50">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="mb-4 text-gray-600">"{testimonial.quote}"</p>
                <div className="flex flex-col">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our pick and pack services
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {[
              {
                question: "How is the price for pick and pack services calculated?",
                answer:
                  "Our pick and pack service pricing is based on multiple factors, including order volume, product types, and packaging requirements. We provide customized quotes to ensure you only pay for the services you need. Please contact us for detailed pricing.",
              },
              {
                question: "What types of products can you handle?",
                answer:
                  "We can handle various types of products, including but not limited to electronics, clothing, home goods, cosmetics, and food items. Our team is professionally trained to provide appropriate packaging solutions according to different product characteristics.",
              },
              {
                question: "Do you provide custom packaging services?",
                answer:
                  "Yes, we offer various custom packaging options, including custom boxes, gift wrapping, and brand logo printing. Custom packaging can help enhance your brand image and improve customer experience.",
              },
              {
                question: "How can I monitor inventory and order status?",
                answer:
                  "We provide real-time inventory management systems and order tracking platforms where you can view inventory levels, order status, and fulfillment details at any time. The system also automatically alerts low stock situations to help you replenish inventory in a timely manner.",
              },
              {
                question: "Can you handle international orders?",
                answer:
                  "Yes, we can handle orders worldwide. Our international shipping network covers more than 200 countries and regions, allowing us to provide pick and pack and delivery services globally.",
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
      <section className="bg-blue-800 py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Optimize Your Order Fulfillment Process?
              </h2>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to learn how our pick and pack services can help improve your business efficiency
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/get-a-quote">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                  Get a Free Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link href="/contact">Contact an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 