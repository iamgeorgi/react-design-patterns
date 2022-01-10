import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Pane = styled.div`
	flex: ${props => props.weight};
`;

export const SplitScreen = ({
    children,
    leftWeight,
    rightWeight
}) => {
    console.log('children', children);
    console.log('leftWeight', leftWeight);
    console.log('rightWeight', rightWeight);
    const [left, right] = children; // the child components comes as children prop which is an array
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}