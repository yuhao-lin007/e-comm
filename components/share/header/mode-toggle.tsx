'use client';
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuCheckboxItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuContent} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
const ModeToggle = () => {
    const [mounted, setMounted]= useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(()=>{
        setMounted(true);
    }, [])

    if(!mounted){
        return null;
    }

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className="focus-visible: ring-0 focus-visible: ring-offset-0">
                {theme === 'system'?(
                    <SunMoon/>
                ): theme === 'dark' ? (
                    <MoonIcon/>
                ): (
                    <SunIcon/>
                )
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>
                Appearance
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                    dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                    light
                </DropdownMenuCheckboxItem>
            </DropdownMenuLabel>
        </DropdownMenuContent>
    </DropdownMenu>;
}
 
export default ModeToggle;