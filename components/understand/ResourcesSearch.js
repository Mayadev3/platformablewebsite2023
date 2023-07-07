import React, { useState,useEffect, useRef } from "react";
import styles from "@/styles/Understandpage.module.css";
import PostCard from "../PostCard";
import Search from '../../components/Search'

export default function ResourcesSearch({ data,posts }) {


  const [searchWord, setSearchWord] = useState("");
  const [selectedCategory,setSelectedCategory]=useState('All')

  const searchFunction = (word) => {
    setSearchWord(word);

  };

  console.log("selectedCategory",selectedCategory)
  return (
    <section className={`${styles['understand-posts-bg']}`}>
      <div className="container mx-auto py-10">
      
  
      <div
          dangerouslySetInnerHTML={{
            __html: data?.understand_blog_description,
          }}
          className="text-white font-bold"
        />

        <div className="grid md:grid-cols-[1fr_3fr_3fr_3fr] grid-cols-1 gap-x-5 my-10">
          <button className="px-10 py-3 rounded-md border text-white"
          onClick={()=>setSelectedCategory('All')}>
            <span>All</span>
          </button>

          <button className="px-10 py-1 rounded-md border text-white"  onClick={()=>setSelectedCategory('Open Ecosystem')}>
            <span>Open Ecosystem</span>
          </button>

          <button className="px-10 py-1 rounded-md border text-white"  onClick={()=>setSelectedCategory('Open Banking/Open Finance')}>
            <span>Open Banking/Open Finance</span>
          </button>

          <button className="px-10 py-1 rounded-md border text-white"  onClick={()=>setSelectedCategory('Open Health')}>
            <span>Open Health</span>
          </button>

        </div>


        <Search searchFunction={searchFunction} />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 px-5 gap-y-5 md:px-0 my-10">

          {posts ? posts
          .filter((post, index) => {
            if (
              searchWord === ""
            ) {
              return post;
            }
            return post.attributes.content.toLowerCase().includes(searchWord) 
            || post.attributes.title.toLowerCase().includes(searchWord)
            || post.attributes.categories.data.attributes.name===selectedCategory
          }).map((post,index)=>{
            return (
              
                <PostCard post={post} key={index}/>
              
            )
          }):null}
          
          
        </div>
      </div>
      
    </section>
  );
}
