"use client"

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ImageIcon, Trash, Trash2, Trash2Icon, Upload, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { set } from 'mongoose'
import { add } from 'date-fns'
import TextEditor from './_components/TextEditor'

const CreateStory = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any>(null);
  const [pins, setPins] = useState<string[]>([]);
  const [currentPin, setCurrentPin] = useState<string>("");
  const [otherPin, setOtherPin] = useState<string>("");
  const [content , setContent] = useState<string>("");


  const predefinedCategory = [{ name: "Artificial Intelligence", value: "ai" }, { name: "Fashion", value: "fashion" }, { name: "Beauty", value: "beauty" }, { name: "Work", value: "work" }, { name: "Technology", value: "technology" }, { name: "Others", value: "others" }];
  // Thumbnail file change function 
  const handleThumbnailFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);

      const objecURL = URL.createObjectURL(selectedFile);
      setPreview(objecURL)
    }
    console.log("preview")
  }
  const removeImage = () => {
    setFile(null);
    setPreview(null);
  };
  // Add category function
  const addCategory = () => {
      if (!currentPin)
        return toast.error("Please select a category");
      if (currentPin === "others" && otherPin.trim() === "")
        return toast.error("Please enter a category");

      const categoryToAdd = currentPin === "others" ? otherPin : currentPin;
      if (pins.includes(currentPin))
        return toast.error("Category already added");
      // {currentPin==="others" && pins.includes(otherPin) && toast.error("Category already added");}
      // {currentPin==="others" && otherPin.trim()==="" && toast.error("Please enter a category");}
      // {currentPin==="others" && otherPin.length>20 && toast.error("Category name too long");}
      {pins.length>=5 && toast.error("Maximum 5 categories allowed");}
      const addValue:string = currentPin==="others" ? otherPin : currentPin;
      setPins((prev) => [...prev, addValue]);
      setOtherPin("");
      setCurrentPin("")
      toast.success("Category added");
  }

  // Cleanup memory when component unmounts
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview])

  return (
    <div className='flex flex-col gap-4 py-10'>
      {/* BLOG TITLE  */}
      <div>
        <input type="text" className='w-full outline-0  py-2  text-4xl font-extrabold' placeholder='Story title here' />
      </div>

      {/* AUTHOR NAME  */}
      <div className='mt-2'>
        <input className='max-w-80 w-full outline-0 font-semibold opacity-80' placeholder='Author Name' />
      </div>

      {/* THUMBNAIL UPLOAD BUTTON */}
      <div className='mt-2'>
        <input type="file" id='thumbnail' onChange={handleThumbnailFileChange} hidden />
        <label htmlFor="thumbnail">
          <span className='p-2 bg-foreground flex w-fit rounded-lg gap-2 items-center'>
            <Upload className='text-background size-4' />
            <p className='text-background text-sm font-semibold'>Upload Thumbnail</p>
          </span>
        </label>
      </div>

      {/* THUMBNAIL PREVIEW */}
      <div className='w-full '>
        <div className='w-full max-w-150 rounded-full'>
          <div className="relative group w-full ">
            {preview ?
              <img
                src={preview}
                alt="Preview"
                className=" aspect-video max-w-150 w-full  h-full object-cover rounded-2xl"
              /> : <div className='flex w-full aspect-video items-center justify-center border-4 border-dashed rounded-xl'>
                Select an image for preview
              </div>
            }

            {/* Overlay and Remove Button */}
            {preview && <button className='absolute right-2 cursor-pointer rounded-lg bottom-2 bg-red-500 flex gap-1 items-center  text-white p-2' onClick={() => { removeImage() }}>
              <Trash2Icon className='size-4 ' />
            </button>}

          </div>
        </div>
      </div>

      

      {/* ADD PINS */}

      <div className='flex flex-col md:flex-row gap-2 '>
        <div className='flex gap-2'>

          <Label>Category</Label>
          <Select value={currentPin} onValueChange={setCurrentPin}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                {predefinedCategory.map((item, index) => {
                  return (

                    <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

        </div>

        {/* INPUT IF OTHERS  */}

        {(currentPin == "others") &&
          <Input value={otherPin} onChange={(e)=>{console.log(e.target.value);setOtherPin(e.target.value)}} className='max-w-80 w-full' placeholder='Enter category' />
        }
        {/* Add Button  */}
        <Button onClick={addCategory}>Add</Button>
      </div>
      {/* DISPLAY PINS  */}
      <div className='flex flex-wrap gap-2'>

      {pins.map((pin, index) => {
        return (
          <div key={index} className='w-fit inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2'>
            <p className='font-medium text-xs'>{predefinedCategory.find((item) => item.value === pin)?.name }</p>
            <button onClick={() => {
              setPins((prev) => prev.filter((p) => p !== pin));
            }}>
              <X className='size-4' />
            </button>
          </div>
        )
      })}
      </div>

      {/* Text Editor  */}

      <div className='w-full'>
          <TextEditor setContent={setContent}/>
      </div>




    </div>
  )
}

export default CreateStory