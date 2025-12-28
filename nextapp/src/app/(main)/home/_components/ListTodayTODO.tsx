import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label'
import { CalendarX2, Info } from 'lucide-react'

const ListTodayTODO = () => {
  return (
    <div className='p-3 border-b-1 py-5'>
        <div className="flex  gap-3">
        <Checkbox id="terms" className='mt-[5px]' />
        <div className='flex flex-col gap-2 flex-1'>
            <Label htmlFor="terms" className='text-md'>Complete preparing for CA-1</Label>
            <div className='flex gap-1 items-center '>
                {/* DEADLINE  */}
                <div className='pl-2 pr-4 flex gap-2 items-center border-r-1'>
                    <CalendarX2 className='size-4' />
                    <p className='text-xs'>01-01-26</p>
                </div>

                {/* LIST  */}
                <div className='pl-2 pr-4 flex gap-2 items-center border-r-1'>
                    <div className='size-3 rounded bg-red-500'></div>
                    <p className='text-xs'>Personal</p>
                </div>
            </div>
        </div>
        <div className='h-full w-10 flex item-center justify-center mt-2 opacity-70'>
            <Info className='size-5'/>
        </div>
      </div>
    </div>
  )
}

export default ListTodayTODO