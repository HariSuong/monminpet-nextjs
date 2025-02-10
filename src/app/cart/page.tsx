import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TrashIcon } from '@radix-ui/react-icons'
import CartList from '@/app/cart/cart-list'
// import { Trash2 } from "lucide-react";

export default function Cart() {
  return (
    <div className='container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
      <CartList />
    </div>
  )
}
