"use client"

import Link, {LinkProps} from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps{
    children: ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void>{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
    children, 
    href,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        // TODO: Run some exit animation 
        const body = document.querySelector("body");
        
        body?.classList.add("page-transition");
        //sleep for some time  
        await sleep(500);
        router.push(href);
        //TODO: Run some enter animation 
        await sleep(500);

        body?.classList.remove("page-transition");

    }

    return ( 
    <Link 
      onClick={handleTransition}
    href={href} {...props}>{children}</Link>
);
};

