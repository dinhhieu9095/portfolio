import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import { auth } from "@/auth"
import { DataItem, Comment, SectionItem } from "@/components/type/type"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CommentSection } from "@/components/CommentSection";

let data: DataItem[] = [{
  title: 'REVIEWS',
  image: "\'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/f978d394-b04b-4bf6-b13c-6b34839dcf57/luca_char_head.jpg\'",
  sections: []
}]
export default async function Reviews() {
  const response = await fetch('https://localhost:44356/api/Auth/getcomments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    let comments = await response.json() as Comment[];
    data.map((item, index) => {
      item.sections = comments.map((item) => {
        return {
          description: item.text,
          image: item.image,
          name: item.name,
          title: item.jobTitle,
          link: item.link,
          isRound: true
        }
      }) as SectionItem[]

    })
  }
  return (
    <PageTransition>
      <Section data={data} />
      <CommentSection />
    </PageTransition>
  )
}
