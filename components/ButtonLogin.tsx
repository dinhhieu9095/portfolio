import { signIn, signOut } from "@/auth"
import { Button } from "./ui/button";
import { auth } from "../auth"
import Image from "next/image"


const AuthButtons = async () => {
    const session = await auth()

    console.log("session:")
    console.log(session)
    
    return (
        <div>
            
            {!session ? (
                <Button className="prefade" onClick={async () => {
                    "use server"
                    await signIn("google")
                }}>Login</Button>
            ) : (
                <>
                    <Button className="prefade" onClick={async () => {
                        "use server"
                        await signOut()
                    }}>signOut</Button>
                    <Button className="prefade" onClick={async () => {
                        "use server"
                        debugger
                        const response = await fetch('https://localhost:44356/api/Auth/register', {
                            method: 'POST',
                            headers: {
                              Authorization: `Bearer ${session?.accessToken}`,
                              'Content-Type': 'application/json'
                            },
                          }).then();
                          if (!response.ok) {
                            console.error('Failed to register user:', response.statusText);
                            throw new Error(`Registration failed: ${response.status}`);
                          }
                }}>TEST</Button>
                    <Image
                        src={session?.user?.image||''}
                        width={37}
                        height={37}
                        className='rounded-full prefade'
                        alt='profile'
                    />
                </>
            )}
        </div>
    );
};

export default AuthButtons;
