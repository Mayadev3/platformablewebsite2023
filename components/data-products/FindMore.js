import styles from "@/styles/DataProducts.module.css";
import Link from "next/link";

export default function FindMore({ data }) {
  const slices = [
    {
      title: 'Understand',
      link: '/understand',
      image: ''
    },
    {
      title: 'Act',
      link: '/act',
      image: ''
    },
    {
      title: 'Engage',
      link: '/engage',
      image: ''
    },
  ]
  return (
    <section className={`py-10  bg-white`}>
      <div className={styles.pic_ctn}>
    {slices?.map( slice => (
      <div className={`${styles.image} grid grid-cols-[4fr_1.5fr]`}>
        <div className="flex flex-col gap-y-10">
          <h3 className="font-bold">{slice.title}</h3>
          <Link href={slice.link}>
          <button className="rounded bg-[var(--yellow)] px-10 py-4 text-lg text-center font-bold lg:rounded-xl text-[var(--purple-medium)]">
            Find out more
          </button>
          </Link>
          
        </div>
        <img className={``} src="https://picsum.photos/200/300?t=1" alt="" />
    </div>
    ))}
    
   
  </div>
      {/* <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-white.svg"
            alt=""
            className="md:flex hidden"
          />
          <h2
            className={`text-white  font-bold md:leading-10 leading-8 `}
          >
            Find out more
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-5 md:px-0 px-5 gap-y-5">
          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Understand</h6>
            
            <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
              Read more about how Platformable builds data products and learn
              about our sustainability/scalability assessment model
            </p>
          </div>

          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Act</h6>
           <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
            Choose from some of the tools we use and recommend when building data products
            </p>
          </div>

          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Engage</h6>
           <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
            Contact us form/calendly booking widget
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
