import { Search } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React from 'react'

const SearchBar = () => {
    return (
        <div className='mt-16 rounded-lg dark:border w-full gap-10 shadow p-3 bg-background flex items-center'>
            {/* SEARCH  */}
            <div className='w-full h-full flex gap-2 items-center'>
                <Search className='size-4' />
                <input type="text" className='w-full  outline-0 text-sm' placeholder='Search Post...' />

            </div>

            {/* PINS  */}

            <div className=''>


                <Select>
                    <SelectTrigger className="w-30">
                        <SelectValue placeholder="All Pins" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Pins</SelectLabel>
                            <SelectItem value="all">All Pins</SelectItem>
                            <SelectItem value="fashion">Fashion</SelectItem>
                            <SelectItem value="beauty">Beauty</SelectItem>
                            <SelectItem value="work">Work</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>


        </div>
    )
}

export default SearchBar