export const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <>
            {items.map((item, i) => (
             <ItemComponent 
             key={i} 
             {...{[resourceName]: item}} 
            //  ["person"]: {
            //     name: 'John Doe',
            //     age: 54,
            //     hairColor: 'brown',
            //     hobbies: ['swimming', 'bicycling', 'video games'],
            // }
             />  
            ))}
        </>
    )
}