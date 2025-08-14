"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useContext } from "react";
import AppContext from "../context/Context";
import { dataType } from "@/public/data";

export default function Page() {
  const { user } = useContext(AppContext);
 const handleClick = ()=>{
    const idArr = ['hello', 'world']
    idArr.push()
    // const strId = idArr.push(e.target.id)
    localStorage.setItem('cart',JSON.stringify(idArr))
 }

  return (
    <div>
      <section className="flex items-center justify-center gap-10">
        {user.map((item:dataType) => (
          <Card key={item.id} className="w-96">
            <CardHeader>
              <CardTitle>Card Content 1</CardTitle>
              <CardAction>
                <Button id={`${item.id}`} onClick={handleClick}>Add to Cart</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              optio ad corrupti ratione nihil facilis doloremque quasi quas,
              minima pariatur repellendus sequi consequuntur quisquam natus rem
              incidunt voluptatibus maxime perspiciatis.
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
