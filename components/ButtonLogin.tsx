import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image"

const AuthButtons = () => {
    const { data: session } = useSession();

    return (
        <div>
            {!session ? (
                <Button onClick={() => signIn("google")}>Login</Button>
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
