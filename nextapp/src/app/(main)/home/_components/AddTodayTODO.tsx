"use client"
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { ChevronDownIcon } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const AddTodayTODO = () => {
  const [showAddDetails, setShowAddDetails] = useState(false);
  return (
    <div className=' w-full'>
      <button className='border-1 transition-all duration-150 w-full flex gap-4 p-3 rounded-lg items-center  hover:scale-101 cursor-pointer shadow ' onClick={() => { setShowAddDetails(true) }}>
        <Plus className='size-7' />
        <p className='text-foreground/70 font-semibold text-sm'>Add new TODO</p>
      </button>

      {showAddDetails &&
        <AddTODODetails setShowAddDetails={setShowAddDetails} />}

    </div>
  )
}

export default AddTodayTODO

const AddTODODetails = ({ setShowAddDetails }: { setShowAddDetails: any }) => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const today = new Date();

  return (
    <div className='fixed z-100 top-0 left-0 flex items-center justify-center flex py-10 px-10 overflow-auto w-screen h-screen bg-black/60 '>
      <div className='max-w-200 max-h-150 bg-background dark:bg-black/10 w-full relative border-white/15 border-1 rounded-xl backdrop-blur-xl px-10 overflow-y-auto'>
        <div className='absolute top-2 right-2 '>
          <Button onClick={() => setShowAddDetails(false)} className='cursor-pointer bg-secondary/50 hover:bg-secondary/70 text-foreground rounded-full p-5'>
            <X className='size-5' />
          </Button>
        </div>
        <div className='flex flex-col gap-4 py-4'>
          <h1 className='font-bold text-2xl'>Task:</h1>
          <FieldGroup className='mt-4'>
            <FieldSet>
              <FieldGroup>
                {/* Task Title  */}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Task Title
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Task Title"
                    required
                  />
                </Field>

                {/* Task Decription  */}
                <Field>
                  <FieldLabel htmlFor="description">Task Description</FieldLabel>
                  <Textarea
                    id="description"
                    placeholder="Enter task description"
                    rows={4}
                  />
                  <FieldDescription>
                    Must be in 100 characters
                  </FieldDescription>
                </Field>

                {/* Task Deadline and Type */}
                <div className='flex gap-4'>

                  {/* Task Deadline  */}
                  <Field>
                    <FieldLabel htmlFor="deadline">Task Deadline</FieldLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="w-48 justify-between font-normal"
                        >
                          {date ? date.toLocaleDateString() : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto overflow-hidden z-100 p-0" align="center">
                        <Calendar
                          mode="single"
                          selected={date}
                          // 2. Pass the normalized date
                          disabled={{ before: today }}
                          onSelect={(selectedDate) => {
                            // 3. Only update and close if a valid date is picked
                            if (selectedDate) {
                              setDate(selectedDate);
                              setOpen(false);
                            }
                          }}
                          // Optional: Professional touch for dark mode
                          classNames={{
                            day_disabled: "text-zinc-600 opacity-50 cursor-not-allowed",
                            day_outside: "text-zinc-600 opacity-50",
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </Field>

                  {/* Task Type  */}
                  <Field>
                    <FieldLabel>Task Type</FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Type" />
                      </SelectTrigger>
                      <SelectContent className='z-100'>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="household">Household</SelectItem>
                        <SelectItem value="studies">Studies</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldDescription>
                      Select the task type
                    </FieldDescription>
                  </Field>
                </div>
                <div className='w-full flex justify-end gap-6'>
                  <Button onClick={()=>setShowAddDetails(false)} className='border-1 bg-background text-foreground hover:bg-secondary'>Cancel</Button>
                  <Button>Add </Button>

                </div>

              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </div>
      </div>

    </div>
  )
}