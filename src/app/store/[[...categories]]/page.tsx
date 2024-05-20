import React from 'react'

interface CategoryProps {
    params: {
        categories: string[],
        searchParams: string
    }
}

const Category = (props: CategoryProps) => {

    console.log(props);
    const {categories} = props.params

    console.log(categories);
    

  return (
    <h1>Categoría Dinámica: {categories}</h1>
  )
}

export default Category