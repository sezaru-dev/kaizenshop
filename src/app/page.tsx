'use client'
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import Stat from "@/components/ui/Stat";
import { useFetchProductsStore } from "@/store/fetch-products-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Electronics from '@/public/electronics.jpg'
import Jewelry from '@/public/jewelry.jpg'
import MensClothing from '@/public/mens-clothing.jpg'
import WomensClothing from '@/public/womens-clothing.jpg'
import Testimony from "@/components/sections/Testimony";
import { useCartStore } from "@/store/cart-store";


export default function Home() {
  const electronics = useFetchProductsStore((state) => state.electronics)
  const getElectronics = useFetchProductsStore((state) => state.getElectronics)
  const AddToCart = useCartStore((state) => state.AddToCart);

  useEffect(() => {
    getElectronics(4)
  },[getElectronics])

  return (
    <main>

      <section className={`relative bg-[url('/hero-image.jpg')] bg-no-repeat bg-cover bg-center`}>
        <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-gray-950 to-transparent z-0"/>

        <div className="container mx-auto lg:max-w-[1280px] h-[calc(100vh-76px)] px-6 pt-10 lg:pt-28 pb-8 lg:pb-20 flex flex-col lg:flex-row items-end lg:justify-between justify-end relative z-10">
          <div>
            <h2 className="text-4xl lg:text-7xl font-extrabold lg:w-[40rem] text-white/90 text-center lg:text-left">Step into the Future with KaizenShop</h2>
            <h3 className="lg:text-xl lg:w-[32rem] text-white/80 mt-5 lg:mt-8 text-center lg:text-left">Find the Latest Innovations in Tech, Luxurious and Handcrafted Jewelry, and Fashion-Forward Clothing All in One Convenient Place</h3>  
            <Button className="mt-6 lg:mt-8 py-2.5 lg:py-3 px-4 lg:px-12 bg-orange-600 rounded-lg font-bold text-white w-full lg:w-auto">
            Login to shop
            </Button>
          </div>

          <div className="flex lg:flex-col justify-around lg:justify-normal flex-wrap gap-6 lg:gap-16 mt-5 lg:mt-12">
            <Stat
              title="High Quality Products"
              value="1,000+"
              titleStyles="text-nowrap text-sm text-base text-white/70 mt-2"
              valueStyles="font-medium text-2xl text-[2.5rem] text-white"/>
            <Stat
              title="Satisfied Customers"
              value="5,000+"
              titleStyles="text-nowrap text-sm text-base text-white/70 mt-2"
              valueStyles="font-medium text-2xl text-[2.5rem] text-white"/>
            <Stat
              title="Customer Support"
              value="24/7"
              titleStyles="text-nowrap text-sm text-base text-white/70 mt-2"
              valueStyles="font-medium text-2xl text-[2.5rem] text-white"/>
          </div>
        </div>
      </section>

      

    <section className="bg-gray-950 flex overflow-hidden space-x-16 relative">
      <div className="absolute top-0 left-0 bg-gradient-to-r from-gray-950 to-transparent h-full w-48 z-10"></div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-950 to-transparent h-full w-48 z-10"></div>
      <ul className="flex items-center space-x-16 py-12 text-white font-bold text-2xl animate-loop-scroll">
        <li>TechNova</li>
        <li>GadgetGrid</li>
        <li>LuxeLustre</li>
        <li>RadiantRings</li>
        <li>UrbanGents</li>
        <li>ValorVogue</li>
        <li>GraceGrove</li>
        <li>ElegantEve</li>
      </ul>
      <ul className="flex items-center space-x-16 py-12 text-white font-bold text-2xl animate-loop-scroll" aria-hidden="true">
        <li>TechNova</li>
        <li>GadgetGrid</li>
        <li>LuxeLustre</li>
        <li>RadiantRings</li>
        <li>UrbanGents</li>
        <li>ValorVogue</li>
        <li>GraceGrove</li>
        <li>ElegantEve</li>
      </ul>
    </section>

    <section className="mt-28">
      <div className="container lg:max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">Featured Products</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">

        {
          electronics? 
          electronics.map(product => (
            <div  key={product.id} className="w-full p-4">
                      <div className='group'>
                        <div className="relative overflow-hidden rounded-lg w-full h-32 md:h-52">
                          <div className='absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 bg-black/20 w-full h-full grid place-content-center text-white font-bold'>
                            <Button
                              onClick={() =>
                                AddToCart({
                                  productId: Number(product?.id) || 0,
                                  productName: product?.title || "Unknown Product",
                                  productPrice: product?.price || 0,
                                  productImage: product?.image || "",
                                  quantity: 1,
                                  total: product?.price ? product.price * 1 : 0,
                                })
                              }
                             className=' px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm'>
                              Add to cart
                            </Button>
                          </div>
                          <Image
                            src={product.image}
                            alt="Product Image"
                            fill
                            priority
                            className="object-contain scale-[.8] group-hover:scale-[.9] transition-transform duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="uppercase text-xs text-gray-500 mb-1">{product.category}</p>
                        <h4 className="text-gray-800 text-sm font-medium underline">
                          <Link href={`/product-details/${product.id}`}>
                          {product.title}
                          </Link>
                        </h4>
                        <div className="flex items-center mt-2 gap-2">
                          <Rating rate={product.rating.rate}/>
                          <p className="text-gray-500 text-sm">{product.rating.count} ratings</p>
                        </div>
                        <div className="inline-flex justify-between w-full mt-2">
                          <h5 className="font-bold text-xl text-gray-900">${product.price}</h5>
                        </div>
                      </div>
                    </div>
          )): ''
        } 

        </div>
      </div>
    </section>

        {/* BROWSE CATEGORY */}
    <section className="mt-28">
      <div className="container lg:max-w-[1280px] mx-auto px-6 bg-gray-200 rounded-xl lg:px-14 pb-14 pt-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Browse by Category</h2>

        <div className=" grid lg:grid-cols-10 gap-4 lg:gap-6 w-full  text-xl">
          <Link href={`/shop/electronics`} className="lg:col-span-4 p-6 h-40 lg:h-64 relative hover:scale-[1.02] transition-transform duration-200 ease-in-out">
            <Image
              src={Electronics}
              alt="Electronics"
              fill
              className="rounded-lg object-cover"/>
            <p className="absolute text-xl font-bold">Electronics</p>
          </Link>
          <Link href={`/shop/jewelery`} className="lg:col-span-6 p-6 h-40 lg:h-64 relative hover:scale-[1.02] transition-transform duration-200 ease-in-out">
            <Image
              src={Jewelry}
              alt="Electronics"
              fill
              className="rounded-lg object-cover"/>
            <p className="absolute text-xl font-bold">Jewelry</p>
          </Link>
          <Link href={`/shop/men's clothing`} className="lg:col-span-6 p-6 h-40 lg:h-64 relative hover:scale-[1.02] transition-transform duration-200 ease-in-out">
            <Image
              src={MensClothing}
              alt="Electronics"
              fill
              className="rounded-lg object-cover"/>
            <p className="absolute text-xl font-bold">Men&apos;s Clothing</p>
          </Link>
          <Link href={`/shop/women's clothing`} className="lg:col-span-4 p-6 h-40 lg:h-64 relative hover:scale-[1.02] transition-transform duration-200 ease-in-out">
            <Image
              src={WomensClothing}
              alt="Electronics"
              fill
              className="rounded-lg object-cover"/>
            <p className="absolute text-xl font-bold">Women&apos;s Clothing</p>
          </Link>

        </div>
      </div>
    </section>

    {/* TESTIMONY */}
    <Testimony/>

    

    </main>
  );
}
