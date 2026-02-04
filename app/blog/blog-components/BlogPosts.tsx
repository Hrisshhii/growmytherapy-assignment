/* eslint-disable @next/next/no-img-element */
"use client";

import Animated from "@/app/Components/hooks/Animated";
import { useReveal } from "@/app/Components/hooks/useReveal";
import { posts } from "./data";

export default function BlogPosts(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-muted text-primary py-32" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-23 gap-y-20">
          {posts.map((post)=>(
            <article key={post.slug} className="group">
              <Animated show={show} delay={120} >
                <a href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-4/3 overflow-hidden mb-6">
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </a>
              </Animated>
              <p className={`text-[0.8rem] mb-2 text-bold fade-left ${show?"show":""}`}>{post.date}</p>
              <Animated show={show} delay={220}>
                <a href={`/blog/${post.slug}`} className="block">
                  <h3 className="font-medium text-[clamp(2.25rem,4vw,4.1rem)] leading-[1.15] sm:text-[clamp(2rem,3vw,3.5rem)] text-primary">{post.title}</h3>
                </a>
              </Animated>
              <a href={`/blog/${post.slug}`} className={`text-black inline-block font-medium border-b border-current leading-tight pb-[0.2px] mt-10 fade-left ${show?"show":""}`}>Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}