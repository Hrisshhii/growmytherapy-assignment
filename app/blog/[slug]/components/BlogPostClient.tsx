"use client";
import Footer from "@/app/Components/Footer";
import Animated from "@/app/Components/hooks/Animated";
import { useReveal } from "@/app/Components/hooks/useReveal";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Post={
  slug:string;
  title:string;
  date:string;
  content:string[];
}

type BlogProps={
  post:Post;
  prev?:Post;
  next?:Post;
}


export default function BlogPostClient({ post, prev, next }: BlogProps){
  const { ref, show } = useReveal(80);
    return (
    <main>
      <section className="bg-muted text-primary border-b border-primary py-32" ref={ref}>
        <div className="mx-auto mx-w-[720px] section-x text-center">
          <p className="text-xs tracking-widest mb-6">{post.date}</p>
          <Animated show={show} delay={120}>
            <h1 className="font-medium text-primary leading-[1.12] text-[clamp(2.2rem,8vw,3rem)] sm:text-[calc(3vw+1rem)] mb-15">{post.title}</h1>
          </Animated>
        
          <article className={`mx-auto text-center sm:text-left font-medium max-w-265 leading-[1.8] space-y-3 text-[1.2rem] fade-left ${show?"show":""}`}>
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
          <Animated show={show} delay={220}>
            <nav className="flex sm:flex-row justify-between items-center gap-8 mt-32 font-medium text-[clamp(1.6rem,3.25vw,1.5rem)] sm:text-[calc(1.5vw+0.8rem)]">
              
                {prev ? (
                  <a href={`/blog/${prev.slug}`} className="flex items-center gap-2 text-left max-w-[45%]">
                    <MdChevronLeft size={28} />
                    <span className="leading-tight">{prev.title}</span>
                  </a>
                ) : <span />}

                {next ? (
                  <a href={`/blog/${next.slug}`} className="flex items-center gap-2 text-right max-w-[45%]">
                    <span className="leading-tight">{next.title}</span>
                    <MdChevronRight size={28}/>
                  </a>
                ) : <span />}
            </nav>
          </Animated>
        </div>
      </section>
      <Footer />
    </main>
  );
}