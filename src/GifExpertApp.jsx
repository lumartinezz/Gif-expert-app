import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch' ])


    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
        //otra forma de agregar items a un array
        //setCategories(cat => [...cat, 'Valorant'])
    }

      return (
        
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
        //setCategories={setCategories}
        onNewCategory={ (event) => onAddCategory(event)}
        />


        {/*listado de gif*/}
 
        { categories.map( category => (
                <GifGrid 
                key={category}
                category={category}/>
        ) ) }
        

            {/*gif item*/}

        </>
    )
}