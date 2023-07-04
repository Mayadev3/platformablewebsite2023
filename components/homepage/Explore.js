import React from 'react'
import styles from '@/styles/Homepage.module.css'
import VerticalDescriptionCard from '../VerticalDescriptionCard'
const sectorsList = [
  {
    vertical_description_card_title: 'Open Ecosystem',
    vertical_description_card_text: ['Interopearbility', 'Transparency', 'Collaboration', 'Flexibility', 'Innovation', 'Community'],
    vertical_description_card_button_text: 'Platformable solutions',
  },
  {
    vertical_description_card_title: 'Open Banking & Open Finance',
    vertical_description_card_text: ['Interopearbility', 'Transparency', 'Collaboration', 'Flexibility', 'Innovation', 'Community'],
    vertical_description_card_button_text: 'Platformable solutions',
  },
  {
    vertical_description_card_title: 'Open Health',
    vertical_description_card_text: ['Interopearbility', 'Transparency', 'Collaboration', 'Flexibility', 'Innovation', 'Community'],
    vertical_description_card_button_text: 'Platformable solutions',
  },
]
export default function Explore({vertical_description_card, title}) {
  return (
    <section id={styles.section_explore} className='py-10'>
      <div className='flex items-center mb-20'>
      <img src='/icon_section04.png' alt="platformable logo" className='-ml-60 lg:-ml-52'/>

        <h2 className='text-white font-bold font-karla '>{title}</h2>
      </div>
      <div className='container mx-auto '>
        <div id={styles.cards_group} className=' grid  md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-10 '>
          {
            vertical_description_card?.map((card, i) => (
              <VerticalDescriptionCard card={card} key={i} position={i+1}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
