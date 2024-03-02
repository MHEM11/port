'use client'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

interface ToDoHeaderProps {
    Name: string;
  }
  

const ToDo_Header = ({ Name }: ToDoHeaderProps) => {
    const router = useRouter();
    return (
        <header className="flex justify-center items-center">      
          <Link href="#" className="absolute top-2 left-2 border border-white rounded-xl md:hidden" onClick={() => router.back()}>
            <BackArrow size="2.5rem"></BackArrow>
          </Link>
          <h2 className="text-3xl pt-3 items-center">{Name}</h2>
        </header>
    )
}

export default ToDo_Header

import { MdOutlineKeyboardArrowLeft as BackArrow } from "react-icons/md"



