import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";

const data = [{
  title: 'REVIEWS',
  image: "\'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/f978d394-b04b-4bf6-b13c-6b34839dcf57/luca_char_head.jpg\'",
  sections: [{
    image: '/assests/avatar.jpg',
    name: 'Nguyen Dinh Hieu',
    isRound: true,
    description: `Andrew Stanton and Pete Docter join the company. 

By the end of the year, each animates a commercial – Andrew Stanton completes “Quite A Package” for Trident, and Pete Docter animates “Boxer” for Listerine. Pixar’s commercial work gives the company invaluable experience in pitching, storytelling, and working with clients, and allows it to develop and refine its production pipeline.

Disney and Pixar announce an agreement “to make and distribute at least one computer-generated animated movie.”

Pixar begins work on the project that will become Toy Story, while continuing to produce commercials and other short materials, including spots for public television.`
  },
  {
    image: '/assests/avatar.jpg',
    name: 'Nguyen Dinh Hieu',
    isRound: true,
    description: `Andrew Stanton and Pete Docter join the company. 

By the end of the year, each animates a commercial – Andrew Stanton completes “Quite A Package” for Trident, and Pete Docter animates “Boxer” for Listerine. Pixar’s commercial work gives the company invaluable experience in pitching, storytelling, and working with clients, and allows it to develop and refine its production pipeline.

Disney and Pixar announce an agreement “to make and distribute at least one computer-generated animated movie.”

Pixar begins work on the project that will become Toy Story, while continuing to produce commercials and other short materials, including spots for public television.`
  }
  ]
}]
export default function Reviews() {
  return (
    <PageTransition>
      <Section data={data} />

    </PageTransition>
  )
}
