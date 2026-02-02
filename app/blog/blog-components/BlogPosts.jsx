/* eslint-disable @next/next/no-img-element */
"use client";

import Animated from "@/app/Components/hooks/Animated";
import { useReveal } from "@/app/Components/hooks/useReveal";

const posts=[
  {
    title:"Blog Post One",
    date:"3/11/19",
    image:"/hero-2.jpg",
    link:"/blog/blog-post-title-one-tdzcp"
  },{
    title:"Blog Post Two",
    date:"3/11/19",
    image:"/hero-3.jpg",
    link:"/blog/blog-post-title-two-4bk3c"
  },{
    title:"Blog Post Three",
    date:"3/11/19",
    image:"/about-circle.jpg",
    link:"/blog/blog-post-title-three-mmwc5"
  },{
    title:"Blog Post Four",
    date:"3/11/19",
    image:"/about-main.jpg",
    link:"/blog/blog-post-title-four-nydcr"
  }
];

export default function BlogPosts(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-muted text-primary py-32" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-23 gap-y-20">
          {posts.map((post,i)=>(
            <article key={i} className="group">
              <Animated show={show} delay={120} >
                <a href={post.link} className="block">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </a>
              </Animated>
              <p className={`text-[0.8rem] mb-2 text-bold fade-left ${show?"show":""}`}>{post.date}</p>
              <Animated show={show} delay={220}>
                <a href={post.link} className="block">
                  <h3 className="heading-lg text-primary">{post.title}</h3>
                </a>
              </Animated>
              <a href={post.link} className={`text-black inline-block font-medium border-b border-current leading-tight pb-[0.2px] mt-10 fade-left ${show?"show":""}`}>Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}