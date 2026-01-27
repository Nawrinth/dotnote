import { Button } from '@/components/ui/button'
import { ClipboardList, Plus } from 'lucide-react'
import React from 'react'

const EmptyState = () => {
  return (
    <div className='w-full   h-full    flex flex-col items-center justify-center'>
        <div className='p-4 rounded-xl bg-foreground'>
            <ClipboardList className='text-background size-8'/>
        </div>

        <h1 className='text-2xl font-bold mt-3'>Create your first board !</h1>

        <p className='opacity-80 text-sm'>Start by creating a board for your organization</p>

        <Button className='mt-4 bg-foreground'>
          <Plus className='size-4 mr-2'/> <p className='font-semibold'>Create Board</p>
        </Button>
    </div>
  )
}

export default EmptyState