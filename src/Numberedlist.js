export const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <>
            {items.map((item, i) => (
                <>  
                    <h3>{i}</h3>
                    <ItemComponent
                        key={i}
                        {...{ [resourceName]: item }} // changes to person={item}
                    />
                </>
            ))}
        </>
    )
}