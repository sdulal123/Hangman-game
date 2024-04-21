import { useState } from "react";
import logo from "../assets/sushiTube.png";
import { Button } from "../component/button";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";

export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            
            {/*Left: Button & Logo*/}
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button 
                    size="icon"
                    variant="ghost" 
                >
                    <Menu />
                </Button>
                <a href="/">
                    <img src={logo} className="h-6"/>
                </a>
            </div>
            {/*Middle: Searchbar & Mic*/}
                <form className={`md:flex gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                    {showFullWidthSearch && (
                    <Button 
                        onClick={() => setShowFullWidthSearch(false)}
                        size="icon" 
                        type="button"
                        variant="ghost"
                        className="flex-shrink-0"
                    >
                        <ArrowLeft />
                    </Button>
                    )}
                    <div className="flex flex-grow max-w-[600px]">
                        <input 
                            type="search" 
                            placeholder="search" 
                            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
                        />
                        <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                            <Search />
                        </Button>
                    </div>
                    <Button 
                        size="icon" 
                        type="button" 
                        className="flex-shrink-0">
                        <Mic />
                    </Button>
                </form>

            {/*Right: Notification & Others*/}
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
               <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden"
                onClick={()=>setShowFullWidthSearch(true)} 
                >
                    <Search />
                </Button> 
               <Button 
                    size="icon" 
                    variant="ghost" 
                    className="md:hidden"
                >
                    <Mic />
                </Button> 
               <Button 
                    size="icon" 
                    variant="ghost"
                >
                    <Upload />
                </Button> 
               <Button 
                    size="icon" 
                    variant="ghost"
                >
                    <Bell />
                </Button> 
               <Button 
                    size="icon" 
                    variant="ghost"
                >
                    <User />
                </Button> 
            </div>
        </div>
    )
}