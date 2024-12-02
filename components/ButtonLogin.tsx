import { signIn } from "@/auth"
import { Button } from "./ui/button";
import { auth } from "../auth"
import Image from "next/image"

const AuthButtons = async () => {
    const session = await auth()
    return (
        <div>
            
            {!session ? (
                <Button onClick={async () => {
                    "use server"
                    await signIn("google")
                }}>Login</Button>
            ) : (
                <>
                    <Image
                        src={session?.user?.image||''}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                    />
                </>
            )}
        </div>
    );
};

export default AuthButtons;
