import { auth } from "@/auth"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image"
import { useState } from "react";


export const CommentSection = async () => {
  const session = await auth();
  const [comment, setComment] = useState(''); // State to store textarea value

  // Handle changes in the textarea
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
    // The Comment function that will send a POST request
    const postComment = async () => {
    if (!comment || !session?.user?.email) {
      alert('Please enter a comment and make sure you are signed in.');
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: session.user.email,
          comment: comment,
        }),
      });

      if (response.ok) {
        alert('Comment posted successfully!');
        setComment(''); // Clear textarea after posting
      } else {
        alert('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('An error occurred while posting the comment');
    }
  };



    return (

        <section className={`min-h-[66vh] max-h-screen py-24 bg-slate-400`}>
            <div className="relative flex flex-col items-start gap-8 xl:grid xl:grid-cols-12 xl:grid-rows-12 container xl:gap-x-4 xl:gap-y-2">
                <div className="">
                    <label htmlFor="message">Comment</label>
                    <Textarea placeholder="Type your message here." id="message" />
                </div>
                {session?.user &&
                    <div className="prefade">
                        < Image src={session.user.image||''} priority quality={100} objectFit="cover" layout="fill" alt="" 
                                                className={`'!w-[80%] !h-[80%] !rounded-full !relative`}
                                            />
                        <Button >Submit</Button>
                    </div>
                }

            </div>
        </section>
    )
}
