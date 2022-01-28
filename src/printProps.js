export const printProps = Component => {
    return (props) => {
        console.log('props', props);
        return <Component {...props} />
    }
}

// we never display HOC in JSX so we don't name them with capital letter